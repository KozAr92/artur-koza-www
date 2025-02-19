import MainMenu from "../main-menu/MainMenu.tsx";
import Header from "./Header.tsx";
import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { PageContext } from "../context/PageContext.tsx";

export const HomePage = () => {
  const { i18n } = useTranslation();
  const { activePage } = useContext(PageContext);

  return (
    <Fragment>
      <MainMenu />
      {!activePage && <Header key={i18n.language} />}
    </Fragment>
  );
};
