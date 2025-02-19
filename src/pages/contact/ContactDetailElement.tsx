type ContactDetailElementProps = {
  label: string;
  detailData: string;
};

export const ContantDetailElement = ({
  label,
  detailData,
}: ContactDetailElementProps) => {
  return (
    <div className={"contact-detail"}>
      <div className={"detail-label"}>{label}</div>
      <div className={"detail-data"}>{detailData}</div>
    </div>
  );
};
