import "../styles/MainMenu.css";
import { PagesMenu } from "./PagesMenu.tsx";
import { LanguageMenu } from "./LanguageMenu.tsx";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <PagesMenu />
      <LanguageMenu />
    </div>
  );
};

export default MainMenu;
