import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";
import Feedback from "./Feedback";

const Testimonials = () =>  {
  const { t, ready } = useTranslation();
  if (!ready) return "Carregando traduções..."; // Loading translations message in Portuguese
  
  const feedback = t("testimonials.feedback", { returnObjects: true });

  return (
    <section id="clients" className={`${styles.flexce} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>{t("testimonials.heading")}</h2>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedback
            key={card.id}
            content={card.content}
            name={card.name}
            title={card.title}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
