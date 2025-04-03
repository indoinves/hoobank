import React from "react";
import styles, { layout } from "../styles/style";
import { useTranslation } from "react-i18next";
import FeatureCard from "./FeatureCard"

const Business = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const features = t("features", { returnObjects: true });

  const businessParagraphs = t("business.paragraphs", {
    returnObjects: true,
  });

  return (
    <section id="features" className={`${layout.section} ${styles.paddingY}`}>
      <div className="flex justify-center w-full">
        <h2 className={`${styles.heading2}`}>
          {t("business.heading")}{" "}
          <span className="text-gradient">{t("business.subheading")}</span>
        </h2>
      </div>

      <div className="flex justify-center w-full flex-col sm:flex-row">
        <div className={`${layout.sectionInfo} flex-col`}>
          <div>
            {businessParagraphs.map((p, index) => (
              <p key={index} className={`${styles.paragraph} md:max-w-[520px] mt-5`}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col `}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              featuresLength={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Business;
