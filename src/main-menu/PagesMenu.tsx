import PageMenuItem, { PageMenuItemProps } from "./PageMenuItem.tsx";
import { PAGES } from "../pages/pages.ts";
import { t } from "i18next";

export const PagesMenu = () => {
  const menuItems = PAGES.reduce<PageMenuItemProps[]>((menuItems, page) => {
    return [...menuItems, { label: t(page.id), id: page.id }];
  }, []);

  return (
    <div className={"pages-menu"}>
      {menuItems.map((menuItem: PageMenuItemProps) => {
        return (
          <PageMenuItem
            label={menuItem.label}
            key={menuItem.id}
            id={menuItem.id}
          />
        );
      })}
    </div>
  );
};
