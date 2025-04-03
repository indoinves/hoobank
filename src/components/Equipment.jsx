import React from "react";
import { printer } from "../assets";
import styles, { layout } from "../styles/style";
import { useTranslation } from "react-i18next";

const Equipment = () => {
  const { t } = useTranslation();

  return (
    <section className={layout.section}>
      <div className="flex justify-center w-full">
        <h2 className={`${styles.heading2}`}>
          {t("equipment.heading")}{" "}
        </h2>
      </div>

      <div className="flex justify-center w-full flex-col-reverse sm:flex-row">
        <div className={layout.sectionImgReverse}>
          <br className="block" />
          <video
            src={printer}
            autoPlay
            muted
            loop
            alt="3dprinter"
            className="w-[100%] h-[100%] mt-5"
          />
        </div>
        <div className={layout.sectionInfo}>
          <p className={`${styles.paragraph} md:max-w-[520px] mt-5 sm:ml-5`}>
            {t("equipment.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
