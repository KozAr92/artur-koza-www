import LanguageMenuItem from "./LanguageMenuItem.tsx";
import { PageLanguage } from "../pages/types.ts";

export const LanguageMenu = () => {
  return (
    <div className="language-menu">
      <LanguageMenuItem label={"PL"} language={PageLanguage.PL} />
      <LanguageMenuItem label={"ENG"} language={PageLanguage.ENG} />
    </div>
  );
};
