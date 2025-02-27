import React from "react";

type PageContextType = {
  activePage: string | undefined;
  setActivePage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const PageContext = React.createContext<PageContextType>({
  activePage: undefined,
  setActivePage: () => {},
});
