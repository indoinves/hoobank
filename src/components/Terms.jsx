import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/style";

const Terms = () => {
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";

  return (
    <section className={`${styles.flexLeft} flex-row flex-wrap sm:mb-20 mb-6`}>
      <h3 className={styles.heading3}>{t("terms.websiteUsageTitle")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("terms.websiteUsageContent")}
      </p>

      <h3 className={styles.heading3}>
        {t("terms.usageRestrictionsTitle")}
      </h3>
      <ul>
        {t("terms.usageRestrictionsList", { returnObjects: true }).map((item, index) => (
          <li key={index} className={`${styles.paragraph}`}>
            {item}
          </li>
        ))}
      </ul>

      <p className={`${styles.paragraph}`}>
        {t("terms.generalUsage")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("terms.disclaimer")}
      </p>

      <h3 className={styles.heading3}>
        {t("terms.informationContentTitle")}
      </h3>
      <p className={`${styles.paragraph}`}>
        {t("terms.informationContent")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("terms.contentChange")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("terms.reportConcern")}
      </p>

      <h3 className={styles.heading3}>{t("terms.hyperlinksTitle")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("terms.hyperlinksContent1")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("terms.hyperlinksContent2")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("terms.hyperlinksContent3")}
      </p>
    </section>
  );
};

export default Terms;
