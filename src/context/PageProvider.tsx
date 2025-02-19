import { useState } from "react";
import { PageContext } from "./PageContext.tsx";

type PageContextProviderProps = {
  children: React.ReactNode;
};

export const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [activePage, setActivePage] = useState<string | undefined>(undefined);

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};
