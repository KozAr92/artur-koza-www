import { useContext } from "react";
import { PageContext } from "../context/PageContext.tsx";

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
    <div onClick={handleClick} className="main-menu-item">
      <div>{label}</div>
    </div>
  );
};

export default PageMenuItem;
