type LongParagraphProps = {
  text: string;
};

export const LongParagraph = ({ text }: LongParagraphProps) => {
  return <div className={"long-paragraph"}>{text}</div>;
};
