import "../../styles/Events.css";
import { EventsList } from "./eventsList.ts";
import { EventElement } from "./EventElement.tsx";
import Scrollbar from "react-scrollbars-custom";

export const EventsPage = () => {
  return (
    <Scrollbar>
      <div className={"events-page"}>
        {EventsList.map((event) => {
          return <EventElement event={event} key={event.id} />;
        })}
      </div>
    </Scrollbar>
  );
};
