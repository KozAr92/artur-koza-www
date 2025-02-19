import { useContext } from "react";
import { createPortal } from "react-dom";
import PageTile from "./PageTile.tsx";
import { PageContext } from "../context/PageContext.tsx";
import { PAGES } from "../pages/pages.ts";

const PageWrapper = () => {
  const { activePage } = useContext(PageContext);
  const pageContainerRef = document.getElementById("root");

  const renderPage = () => {
    const currentPage = PAGES.find((page) => page.id === activePage);

    return (
      currentPage && (
        <div className={"page-overlay"}>
          <PageTile
            id={currentPage.id}
            key={currentPage.id}
            className={currentPage.className}
          >
            <currentPage.page />
          </PageTile>
        </div>
      )
    );
  };

  return pageContainerRef && createPortal(renderPage(), pageContainerRef);
};

export default PageWrapper;
