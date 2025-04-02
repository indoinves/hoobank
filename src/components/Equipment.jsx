import React from "react";
import { printer } from "../assets";
import styles, { layout } from "../styles/style";
import { useTranslation } from "react-i18next";

const Equipment = () => {
  const { t } = useTranslation();

  return (
    <section className={layout.section}>
      <div className={layout.sectionImgReverse}>
        <video
          src={printer}
          autoPlay
          muted
          loop
          alt="3dprinter"
          className="w-[120%] h-[120%]"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("equipment.heading")}
        </h2>
        <p className={`${styles.paragraph} md:max-w-[520px] mt-5`}>
          {t("equipment.description")}
        </p>
      </div>
      
    </section>
  );
};

export default Equipment;
