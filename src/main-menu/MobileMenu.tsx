import { useContext, useEffect, useRef, useState } from "react";
// import MenuButton from "../icons/menu_40dp_8E793E_FILL0_wght400_GRAD0_opsz40.svg";
import MenuButton from "/artur-koza-www/images/menu_40dp_8E793E_FILL0_wght400_GRAD0_opsz40.svg";
import { PagesMenu } from "./PagesMenu.tsx";
import { LanguageMenu } from "./LanguageMenu.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { PageContext } from "../context/PageContext.tsx";
import { useClickOutside } from "../hooks/useClickOutside.tsx";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { activePage } = useContext(PageContext);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (activePage) {
      setShowMenu(false);
    }
  }, [activePage]);

  useClickOutside(
    () => setShowMenu(false),
    menuRef as React.RefObject<HTMLElement>,
    [menuButtonRef.current].filter(Boolean),
  );

  return (
    <div className="mobile-menu">
      {!activePage && <LanguageMenu />}
      {activePage && <div className={"site-name"}>Artur Koza</div>}
      <button
        className="mobile-menu-button"
        ref={menuButtonRef}
        onClick={handleClick}
      >
        <img src={MenuButton} alt={"menu-button"} />{" "}
      </button>
      {showMenu && (
        <AnimatePresence>
          <motion.div
            className={"mobile-pages-menu"}
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
            exit={{ opacity: 0 }}
            key={"mobile-pages-menu"}
          >
            <PagesMenu />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
