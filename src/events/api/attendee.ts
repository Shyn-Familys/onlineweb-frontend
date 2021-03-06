import { get, post, deleteR } from 'common/utils/api';

import { getUser } from 'authentication/api';

import { IAttendee } from 'events/models/Attendee';
import { IAuthUser } from 'authentication/models/User';

const getEventAttendeeUrl = (eventId: number) => `/api/v1/event/attendance-events/${eventId}/attendee/`;
const getUserAttendUrl = (eventId: number) => `/api/v1/event/attendance-events/${eventId}/register/`;
const getUserUnAttendUrl = (eventId: number) => `/api/v1/event/attendance-events/${eventId}/unregister/`;

interface IAttendEventOptions {
  allowPictures?: boolean;
  showAsAttending?: boolean;
  extras?: number[]; // options id
}

export const getAttendeeForEvent = async (eventId: number): Promise<IAttendee> => {
  const user = await getUser();
  const attendee = await get<IAttendee>(getEventAttendeeUrl(eventId), { format: 'json' }, { user });
  return attendee;
};

export const userAttendEvent = async (
  eventId: number,
  captcha: string,
  options?: IAttendEventOptions,
  user?: IAuthUser
): Promise<IAttendee> => {
  if (!user) {
    user = await getUser();
  }

  try {
    const ret = await post<IAttendee>(
      getUserAttendUrl(eventId),
      {
        show_as_attending_event: options?.showAsAttending,
        allow_pictures: options?.allowPictures,
        extras: options?.extras,
        recaptcha: captcha,
      },
      undefined,
      { user }
    );
    return ret;
  } catch (response) {
    throw new Error('Kunne ikke melde brukeren på dette arrangementet!');
  }
};

export const userUnattendEvent = async (eventId: number, user?: IAuthUser): Promise<unknown> => {
  if (!user) {
    user = await getUser();
  }

  try {
    const ret = await deleteR(getUserUnAttendUrl(eventId), undefined, { user });
    return ret;
  } catch (response) {
    throw new Error('Kunne ikke melde brukeren av dette arrangementet!');
  }
};
