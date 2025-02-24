type ShortParagraphProps = {
  text: string;
};

export const ShortParagraph = ({ text }: ShortParagraphProps) => {
  return <div className={"short-paragraph"}>{text}</div>;
};
