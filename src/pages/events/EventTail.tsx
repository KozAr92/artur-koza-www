import "./EventTail.css";
import { ExternalLink } from "react-external-link";
import { t } from "i18next";

type EventTailProps = {
  title: string;
  type: string;
  location: string;
  link?: string;
  tickets?: string;
  description?: string;
};

export const EventTail = ({
  title,
  type,
  location,
  link,
  tickets,
}: EventTailProps) => {
  return (
    <div className={"event-tail"}>
      <div className={"title-tail"}>{title}</div>
      <div className={"type-tail"}>{t(type)}</div>
      <div className={"location-tail"}>{location}</div>
      <div className={"links-tail"}>
        {link && (
          <div className={"link-tail"}>
            <ExternalLink href={link}>{t("event-link")}</ExternalLink>
          </div>
        )}
        {tickets && (
          <div className={"tickets-tail"}>
            <ExternalLink href={tickets}>{t("event-tickets")}</ExternalLink>
          </div>
        )}
      </div>
    </div>
  );
};
