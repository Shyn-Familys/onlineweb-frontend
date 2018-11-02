import React from 'react';
import { DateTime } from 'luxon';
import { INewEvent, getEventColor } from '../../models/Event';
import { DOMAIN } from 'common/constants/endpoints';
import style from './detail.less';
import CardHeader from './Card/CardHeader';
import Block from './Block';

const PictureCard = ({ image, event_start, event_end, location, company_event, event_type }: INewEvent) => {
  const eventImage = company_event[0] ? company_event[0].company.image : image;
  const imageUrl = eventImage ? eventImage.wide : '';
  const color = getEventColor(event_type);

  const startDate = DateTime.fromISO(event_start).toFormat('d MMM yyyy');
  const startTime = DateTime.fromISO(event_start).toFormat('hh:mm');
  const endDate = DateTime.fromISO(event_end).toFormat('d MMM yyyy');
  const endTime = DateTime.fromISO(event_end).toFormat('hh:mm');

  return (
    <div className={style.pictureCard}>
      <div className={style.imageContainer}>
        <img src={DOMAIN + imageUrl} />
      </div>

      <div className={style.attendance}>
        <CardHeader color={color}>Oppmøte</CardHeader>

        <div className={style.blockGrid}>
          <Block title="Starttid">
            <p>{startDate}</p>
            <p>{startTime}</p>
          </Block>
          
          <Block title="Sluttid">
            <p>{endDate}</p>
            <p>{endTime}</p>
          </Block>

          <Block title="Sted">
            <p>{location}</p>
          </Block>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
