import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";
import Product from "./Product";

const Testimonials = () =>  {
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const products = t("products", { returnObjects: true });

  return (
    <section id="products" className={`${styles.flexce} flex-col relative`}>
      <div className="absolute z-[0] md:w-[60%] md:h-[60%] md:-right-[50%] rounded-full blue__gradient md:bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} mt-10`}>
          {t("product_title.title")}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-contrainer relative z-[1]">
        {products.map((card) => (
          <Product key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
