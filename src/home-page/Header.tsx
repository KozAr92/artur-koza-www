import "../styles/HomePage.css";
import { t } from "i18next";

const Header = () => {
  return (
    <div className="main-header">
      <div className={"main-header-title"}>
        Artur <span className={"surname"}>Koza</span>
      </div>
      <div className={"main-header-subtitle"}>{t("subtitle")}</div>
    </div>
  );
};

export default Header;
