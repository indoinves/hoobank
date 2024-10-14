import React from "react";
import { useTranslation } from "react-i18next";
import { ptFlag, usaFlag, world } from "../../assets";

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="dropdown">
      <button className="dropbtn">
        <img src={world} alt="flag" className="world_icon" />
      </button>
      <div className="dropdown-content">
        <a className="language_elem" onClick={() => handleChangeLanguage("en-US")}>
          <img src={usaFlag} alt="English" className="flag-icon" />
          <span className="language-text">EN</span>
        </a>
        <a className="language_elem" onClick={() => handleChangeLanguage("pt-PT")}>
          <img src={ptFlag} alt="Portuguese" className="flag-icon" />
          <span className="language-text">PT</span>
        </a>
      </div>
    </div>
  );
};

export default I18n;
