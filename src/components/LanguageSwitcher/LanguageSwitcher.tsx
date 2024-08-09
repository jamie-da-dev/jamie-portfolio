import React from "react";
import { Language } from "../../types";
import "./LanguageSwitcher.css";

interface LanguageSwitcherProps {
  language: Language;
  onChangeLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onChangeLanguage,
}) => {
  return (
    <div className="language-switcher">
      <button
        className={language === "ko" ? "active" : ""}
        onClick={() => onChangeLanguage("ko")}
      >
        가
      </button>
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => onChangeLanguage("en")}
      >
        A
      </button>
      <button
        className={language === "ja" ? "active" : ""}
        onClick={() => onChangeLanguage("ja")}
      >
        あ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
