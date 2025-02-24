import MainMenu from "../main-menu/MainMenu.tsx";
import Header from "./Header.tsx";
import { Fragment, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PageContext } from "../context/PageContext.tsx";
import { Footer } from "./Footer.tsx";
import { MobileMenu } from "../main-menu/MobileMenu.tsx";

export const HomePage = () => {
  const { i18n } = useTranslation();
  const { activePage } = useContext(PageContext);

  const isMobile = () => {
    const width = window.innerWidth;
    return width < 768;
  };

  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(isMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      {!activePage && !isMobileDevice && <MainMenu />}
      {isMobileDevice && <MobileMenu />}
      {!activePage && <Header key={i18n.language} />}
      {!activePage && <Footer />}
    </Fragment>
  );
};
