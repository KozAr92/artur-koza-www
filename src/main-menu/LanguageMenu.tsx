// import LanguageMenuItem from "./LanguageMenuItem.tsx";
import { PageLanguage } from "../pages/types.ts";
import { useTranslation } from "react-i18next";

export const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const handleSetPolish = () => {
    i18n.changeLanguage(PageLanguage.PL);
  };
  const handleSetEnglish = () => {
    i18n.changeLanguage(PageLanguage.ENG);
  };

  return (
    <div className="language-menu">
      <div className={"language-menu-wrapper"}>
        <span className={"language-menu-item"} onClick={handleSetPolish}>
          PL
        </span>
        <span className={"divider"}> / </span>
        <span className={"language-menu-item"} onClick={handleSetEnglish}>
          ENG
        </span>
      </div>
      {/*<LanguageMenuItem label={"PL"} language={PageLanguage.PL} />*/}
      {/*<LanguageMenuItem label={"ENG"} language={PageLanguage.ENG} />*/}
    </div>
  );
};
