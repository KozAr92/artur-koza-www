import "../styles/HomePage.css";
import { t } from "i18next";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  return (
    <div className="main-header">
      <AnimatePresence>
        <motion.div
          className={"main-header-title"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          exit={{ opacity: 0 }}
        >
          Artur <span className={"surname"}>Koza</span>
        </motion.div>
        <motion.div
          className={"main-header-subtitle"}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          exit={{ opacity: 0 }}
        >
          {t("subtitle")}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Header;
