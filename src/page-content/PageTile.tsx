import "../styles/PageContent.css";
import PageHeader from "./PageHeader.tsx";
import React from "react";

type PageTileProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const PageTile = ({ id, children, className }: PageTileProps) => {
  return (
    <div className={className ?? "page"}>
      <PageHeader id={id} />
      {children}
    </div>
  );
};

export default PageTile;
