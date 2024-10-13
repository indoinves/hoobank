import React from "react";
import styles, { layout } from "../styles/style";
import { useTranslation } from "react-i18next";

const FeatureCard = ({ icon, title, content, index, featuresLength }) => (
  <div
    className={`flex flex-row ss:p-5 rounded-[20px] ${
      index !== featuresLength - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const features = t("features", { returnObjects: true });

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          {t("business.heading")}{" "}
          <span className="text-gradient">{t("business.subheading")}</span>
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          {t("business.paragraph1")}
        </p>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          {t("business.paragraph2")}
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
            featuresLength={features.length}
          />
        ))}
      </div>
    </section>
  );
}

export default Business;
