import "../../styles/Contact.css";
import { t } from "i18next";
import { EMAIL, PHONE_NUMBER } from "./contact.ts";
import { ContantDetailElement } from "./ContactDetailElement.tsx";

export const ContactPage = () => {
  return (
    <div className={"contact-page"}>
      <ContantDetailElement label={t("phone")} detailData={PHONE_NUMBER} />
      <ContantDetailElement label={t("mail")} detailData={EMAIL} />
    </div>
  );
};
