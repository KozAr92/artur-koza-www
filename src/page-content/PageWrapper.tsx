import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PageTile from "./PageTile.tsx";
import { PageContext } from "../context/PageContext.tsx";
import { PAGES } from "../pages/pages.ts";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = () => {
  const { activePage } = useContext(PageContext);
  const pageContainerRef = document.getElementById("root");

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!activePage);
  }, [activePage]);

  const renderPage = () => {
    const currentPage = PAGES.find((page) => page.id === activePage);

    return (
      <AnimatePresence>
        {currentPage &&
          (isVisible ? (
            <motion.div
              className={`page-overlay`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              exit={{ opacity: 0 }}
            >
              <PageTile
                id={currentPage.id}
                key={currentPage.id}
                className={currentPage.className}
              >
                <currentPage.page />
              </PageTile>
            </motion.div>
          ) : null)}
      </AnimatePresence>
    );
  };

  return pageContainerRef && createPortal(renderPage(), pageContainerRef);
};

export default PageWrapper;
