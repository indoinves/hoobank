import React from "react";
import { printer } from "../assets";
import styles, { layout } from "../styles/style";
import { useTranslation } from "react-i18next";

const Equipment = () => {
  const { t } = useTranslation();

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("equipment.heading")} <br className="md:block hidden" />
          {t("equipment.subheading")}
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          {t("equipment.description")}
        </p>
      </div>
      <div className={layout.sectionImg}>
        <video
          src={printer}
          autoPlay
          muted
          loop
          alt="3dprinter"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default Equipment;
