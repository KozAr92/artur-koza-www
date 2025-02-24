import { ExternalLink } from "react-external-link";
import { t } from "i18next";

type ReviewTailProps = {
  title: string;
  link: string;
  description: string;
};
export const ReviewTail = ({ title, link, description }: ReviewTailProps) => {
  return (
    <div className={"review-tail"}>
      <div className={"review-tail-title-link"}>
        <div className={"review-tail-title"}>{title}</div>
        <div className={"review-tail-link"}>
          <ExternalLink href={link}>{t("review-link")}</ExternalLink>
        </div>
      </div>

      <div className={"review-tail-description"}>{description}</div>
    </div>
  );
};
