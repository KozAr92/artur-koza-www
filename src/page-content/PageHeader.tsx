import { useContext } from "react";
import { PageContext } from "../context/PageContext.tsx";
import { t } from "i18next";

type PageHeaderProps = {
  id: string;
};

const PageHeader = ({ id }: PageHeaderProps) => {
  const { setActivePage } = useContext(PageContext);

  const handleClose = () => {
    setActivePage(undefined);
  };

  return (
    <div className="page-header">
      <div>{t(id)}</div>
      <button className={"close-button"} onClick={handleClose}>
        X
      </button>
    </div>
  );
};

export default PageHeader;
