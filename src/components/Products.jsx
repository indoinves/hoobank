import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";
import Product from "./Product";
import Order from "./Order";

const Products = () => {
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";

  const productSections = t("productSections", { returnObjects: true });

  return (
    <section id="products" className={`${styles.flexce} flex-col relative`}>
      <div className="absolute z-[0] md:w-[60%] md:h-[60%] md:-right-[50%] rounded-full blue__gradient md:bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1]">
        <h2 className={`${styles.heading2} mt-10`}>
          {t("product_title.title")}
        </h2>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1]">
        <p className="font-poppins font-normal text-[18px] text-white mt-10">
          {t("products_description")}
        </p>
      </div>

      {productSections.map((section) => (
        <div key={section.title} className="w-full">
          <h3 className={`${styles.heading3} mt-10`}>{section.title}</h3>
          <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
            {section.products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <hr></hr>
        </div>
      ))}

      <Order />
    </section>
  );
};

export default Products;
