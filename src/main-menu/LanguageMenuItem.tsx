import { useTranslation } from "react-i18next";

export type LanguageManuItemProps = {
  label: string;
  language: string;
};

const LanguageMenuItem = ({ label, language }: LanguageManuItemProps) => {
  const { i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(language);
  };

  return (
    <div onClick={handleClick} className="language-menu-item">
      <div>{label}</div>
    </div>
  );
};

export default LanguageMenuItem;
