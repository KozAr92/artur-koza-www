import { EventItem } from "./eventsList.ts";
import { DateTail } from "./DateTail.tsx";
import { EventTail } from "./EventTail.tsx";

type EventElementProps = {
  event: EventItem;
};

export const EventElement = ({ event }: EventElementProps) => {
  const { title, type, location, link, tickets } = event;
  const { day, month, year } = event.date;

  return (
    <div className={"event-item"}>
      <DateTail day={day} month={month} year={year} />
      <EventTail
        title={title}
        type={type}
        location={location}
        link={link}
        tickets={tickets}
      />
    </div>
  );
};
