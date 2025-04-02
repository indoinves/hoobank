import React from "react";
import styles from "../../styles/style";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{t("cta.heading")}</h2>
        <p className={`${styles.paragraph} mt-5`}>
          {t("cta.description")}
        </p>
      </div>
    </section>
  );
};
export default CTA;
