import PageMenuItem, { PageMenuItemProps } from "./PageMenuItem.tsx";
import { PAGES } from "../pages/pages.ts";
import { t } from "i18next";
import { useContext } from "react";
import { PageContext } from "../context/PageContext.tsx";

export const PagesMenu = () => {
  const { activePage } = useContext(PageContext);
  const menuItems = PAGES.reduce<PageMenuItemProps[]>((menuItems, page) => {
    return [...menuItems, { label: t(page.id), id: page.id }];
  }, []);

  return (
    <div className={"pages-menu"}>
      {menuItems
        .filter((menuItem) => menuItem.id !== activePage)
        .map((menuItem: PageMenuItemProps) => {
          return <PageMenuItem label={menuItem.label} id={menuItem.id} />;
        })}
    </div>
  );
};
