import "../../styles/About.css";
import { LongParagraph } from "./LongParagraph.tsx";
import {
  ABOUT_DESCRIPTION_PL,
  ABOUT_FIRST_INFO_EN,
  ABOUT_FIRST_INFO_PL,
} from "./about.ts";
import { ShortParagraph } from "./ShortParagraph.tsx";
import { ExternalLink } from "react-external-link";
// import aboutImage from "../../images/about-image.jpg";
import aboutImage from "/artur-koza-www/images/about-image.JPG";
import Scrollbar from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export const AboutPage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className={"about-page"}>
      <div className={"about-image"}>
        <img src={aboutImage} alt={"about-image"} />
      </div>
      <Scrollbar style={{ width: "60%" }}>
        <div className={"about-description"}>
          <ShortParagraph
            text={
              currentLanguage === "pl"
                ? ABOUT_FIRST_INFO_PL
                : ABOUT_FIRST_INFO_EN
            }
          />
          <LongParagraph text={ABOUT_DESCRIPTION_PL} />
          <ExternalLink
            href={"https://filharmonia.lodz.pl/o-nas/artysci/chormistrz"}
            style={{ paddingLeft: "5px" }}
          >
            {t("web-description")}
          </ExternalLink>
        </div>
      </Scrollbar>
    </div>
  );
};
