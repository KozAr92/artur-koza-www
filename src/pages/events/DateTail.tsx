import "./DateTail.css";
import { t } from "i18next";

type DateTailProps = {
  day: number;
  month: string;
  year: number;
};

export const DateTail = ({ day, month, year }: DateTailProps) => {
  return (
    <div className={"date-tail"}>
      <div className={"day-tail"}>{day}</div>
      <div className={"month-tail"}>{t(month)}</div>
      <div className={"year-tail"}>{year}</div>
    </div>
  );
};
