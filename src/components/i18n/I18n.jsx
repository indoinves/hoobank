import React from "react";
import { useTranslation } from "react-i18next";
import { ptFlag, usaFlag } from "../../assets";
import Flag from "./Flag";

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;
  return (
    <div className="flags-container">
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={selectedLanguage === "pt-PT"}
          onChange={() =>
            handleChangeLanguage(
              selectedLanguage === "pt-PT" ? "en-US" : "pt-PT"
            )
          }
        />
        <label htmlFor="language-toggle"></label>
        <span
          className="on"
          onClick={() => handleChangeLanguage("en-US")}
          style={{
            fontWeight: selectedLanguage === "en-US" ? "bold" : "normal",
          }}
        >
          EN
        </span>
        <span
          className="off"
          onClick={() => handleChangeLanguage("pt-PT")}
          style={{
            fontWeight: selectedLanguage === "pt-PT" ? "bold" : "normal",
          }}
        >
          PT
        </span>
      </div>
    </div>
  );
};

export default I18n;
