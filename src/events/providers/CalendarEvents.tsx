import React, { createContext, Component } from 'react';
import { INewEvent, IEventViewProps } from 'events/models/Event';
import { DateTime } from 'luxon';
import { constructMonthMap } from '../utils/calendarUtils';
import { getCalendarSession, saveCalendarSession } from 'events/api/calendarSession';
import { IEventAPIParameters, getEvents, controlledGetEvents } from 'events/api/events';

export interface ICalendarEventsState {
  eventMonth: INewEvent[][];
  month: DateTime;
  controller?: AbortController;
  changeMonth: (n: number) => void;
  init: () => void;
}

const EMPTY_EVENT_MONTH = constructMonthMap(DateTime.local(), []);

const INITIAL_STATE: ICalendarEventsState = {
  eventMonth: EMPTY_EVENT_MONTH,
  month: DateTime.local(),
  changeMonth: (n: number) => {
    throw new Error('Month was changed before component was initialized');
  },
  init: async () => {
    throw new Error('Init state was called before component was initialized');
  },
};

export const CalendarEventsContext = createContext(INITIAL_STATE);

class CalendarEvents extends Component<IEventViewProps, ICalendarEventsState> {
  public state: ICalendarEventsState = { ...INITIAL_STATE };

  public async componentDidMount() {
    await this.getSession();
  }

  public init = async () => await this.fetchEvents();

  public async getSession() {
    const { month } = await getCalendarSession();
    this.setState({ month });
  }

  public async setSession() {
    const { month } = this.state;
    await saveCalendarSession({ month });
  }

  public cancelFetch() {
    const { controller } = this.state;
    if (controller) {
      controller.abort();
    }
  }

  public fetchEvents = async (month: DateTime = this.state.month) => {
    const firstDayOfMonth = month.minus({ days: month.day - 1 });
    const lastDayOfMonth = firstDayOfMonth.plus({ months: 1 }).minus({ days: 1 });

    const args: IEventAPIParameters = {
      event_start__gte: firstDayOfMonth.toISODate(),
      event_start__lte: lastDayOfMonth.toISODate(),
      page_size: 60,
    };

    const { data, controller } = controlledGetEvents(args);
    this.setState({ controller });

    const { results } = await data;
    const eventMonth = constructMonthMap(month, results);
    this.setState({ eventMonth });
  };

  public changeMonth = async (number: number) => {
    let { month } = this.state;
    this.cancelFetch();

    month = number >= 0 ? month.plus({ months: number }) : month.minus({ months: Math.abs(number) });
    this.setState({ month, eventMonth: EMPTY_EVENT_MONTH }, () => this.setSession());

    await this.fetchEvents(month);
  };

  public render() {
    const { changeMonth, init } = this;
    const value = { ...this.state, changeMonth, init };
    return <CalendarEventsContext.Provider value={value}>{this.props.children}</CalendarEventsContext.Provider>;
  }
}

export default CalendarEvents;
