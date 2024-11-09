import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();

  const description = t("order.description", { returnObjects: true });
  
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{t("order.heading")}</h2>
        {description.map((d) => (
            <p className={`${styles.paragraph} mt-5`}>
                {d}
            </p>
        ))}
        
      </div>
    </section>
  );
};

export default Order;
