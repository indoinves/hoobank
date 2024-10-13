import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t } = useTranslation();
  const arbitration_centers = t("cookie_policy.dispute_resolution.arbitration_centers", { returnObjects: true });
  const cookies_at_use = t("cookie_policy.cookies_we_may_use", { returnObjects: true });
  const steps = t("cookie_policy.dispute_resolution.steps", { returnObjects: true });

  return (
    <section className={`${styles.flexLeft} flex-row flex-wrap sm:mb-20 mb-6`}>
      <h3 className={styles.heading3}>{t("cookie_policy.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.intro")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.what_is_cookie.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.what_is_cookie.description1")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.what_is_cookie.description2")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.cookies_title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.cookies_description")}
      </p>

      <ul>
        {cookies_at_use.map((cookie) => (
            <li className={`${styles.paragraph}`}>
              {cookie}
            </li>
        ))}
      </ul>

      <h3 className={styles.heading3}>{t("cookie_policy.cookie_duration.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.cookie_duration.description")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.control_cookies.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.control_cookies.description")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.email_communications.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.email_communications.description")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.changes.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.changes.description")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.dispute_resolution.title")}</h3>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.dispute_resolution.description1")}
      </p>
      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.dispute_resolution.description2")}
      </p>


      <ul>
        {steps.map((step) => (
            <li className={`${styles.paragraph}`}>
              {step}
            </li>
        ))}
      </ul>

      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.dispute_resolution.description3")}
      </p>

      <ul>
        {arbitration_centers.map((place) => (
            <li className={`${styles.paragraph}`}>
              {place}
            </li>
        ))}
      </ul>

      <p className={`${styles.paragraph}`}>
        {t("cookie_policy.dispute_resolution.consumer_portal")}
      </p>

      <h3 className={styles.heading3}>{t("cookie_policy.complaint_book.title")}</h3>
      <p className={`${styles.paragraph}`}>
        <a href="https://www.livroreclamacoes.pt/inicio">
          {t("cookie_policy.complaint_book.link")}
        </a>
      </p>
    </section>
  );
};

export default CookiePolicy;
