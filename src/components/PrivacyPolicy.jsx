import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const infoContent = t("privacyPolicy.infoContent.paragraphs", {
    returnObjects: true,
  });
  const hyperlinksText = t("privacyPolicy.hyperlinks.paragraphs", {
    returnObjects: true,
  });
  const contactsText = t("privacyPolicy.responsibilityContacts.paragraphs", {
    returnObjects: true,
  });
  const registrationText = t("privacyPolicy.dataRegistration.paragraphs", {
    returnObjects: true,
  });
  

  return (
    <section className={`${styles.flexLeft} flex-row flex-wrap sm:mb-20 mb-6`}>
      <h3 className={styles.heading3}>{t("privacyPolicy.title")}</h3>

      <p className={`${styles.paragraph}`}>{t("privacyPolicy.intro.text")}</p>

      <h3 className={styles.heading3}>{t("privacyPolicy.websiteUse.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("privacyPolicy.websiteUse.text")}
      </p>

      <ul>
        {t("privacyPolicy.websiteUse.list", { returnObjects: true }).map(
          (item, index) => (
            <li className={`${styles.paragraph}`} key={index}>
              {item}
            </li>
          )
        )}
      </ul>

      <p className={`${styles.paragraph}`}>
        {t("privacyPolicy.websiteUse.general")}
      </p>

      <h3 className={styles.heading3}>
        {t("privacyPolicy.infoContent.title")}
      </h3>
      {infoContent.map((p) => (
        <p className={`${styles.paragraph}`}>{p}</p>
      ))}

      <h3 className={styles.heading3}>{t("privacyPolicy.hyperlinks.title")}</h3>
      {hyperlinksText.map((p) => (
        <p className={`${styles.paragraph}`}>{p}</p>
      ))}

      <h3 className={styles.heading3}>
        {t("privacyPolicy.responsibilityContacts.title")}
      </h3>
      {contactsText.map((p) => (
        <p className={`${styles.paragraph}`}>{p}</p>
      ))}

      <h3 className={styles.heading3}>
        {t("privacyPolicy.dataRegistration.title")}
      </h3>
      {registrationText.map((p) => (
        <p className={`${styles.paragraph}`}>{p}</p>
      ))}

      <h3 className={styles.heading3}>
        {t("privacyPolicy.automaticDataCollection.title")}
      </h3>
      <p className={`${styles.paragraph}`}>
        {t("privacyPolicy.automaticDataCollection.text")}
      </p>

      <h3 className={styles.heading3}>
        {t("privacyPolicy.dataRetention.title")}
      </h3>
      <p className={`${styles.paragraph}`}>
        {t("privacyPolicy.dataRetention.text")}
      </p>

      <h3 className={styles.heading3}>{t("privacyPolicy.accessData.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("privacyPolicy.accessData.text")}
      </p>
    </section>
  );
};

export default PrivacyPolicy;
