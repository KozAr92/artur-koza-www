import { useContext } from "react";
import { PageContext } from "../context/PageContext.tsx";
import { motion } from "framer-motion";

export type PageMenuItemProps = {
  label: string;
  id: string;
};

const PageMenuItem = ({ label, id }: PageMenuItemProps) => {
  const { setActivePage } = useContext(PageContext);

  const handleClick = () => {
    setActivePage(id);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="main-menu-item"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div>{label}</div>
    </motion.div>
  );
};

export default PageMenuItem;
