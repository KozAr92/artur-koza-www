import "../styles/MainMenu.css";
import { PagesMenu } from "./PagesMenu.tsx";
import { LanguageMenu } from "./LanguageMenu.tsx";
import { motion } from "framer-motion";

const MainMenu = () => {
  return (
    <motion.div
      className="main-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <PagesMenu />
      <LanguageMenu />
    </motion.div>
  );
};

export default MainMenu;
