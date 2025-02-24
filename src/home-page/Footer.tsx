import { t } from "i18next";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      className={"footer"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {t("footer")}
    </motion.div>
  );
};
