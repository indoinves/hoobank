import React from "react";
import styles, { layout } from "../styles/style";
import { discount } from "../assets";
import { useTranslation } from "react-i18next";

const Materials = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";

  const tableHeader = t("materials.table.header", { returnObjects: true });
  const tableRows = t("materials.table.rows", { returnObjects: true });

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <table>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.malleability}</td>
                <td>{row.quality}</td>
                <td>
                  <s className="small-text">{row.cost[0]}</s>
                  <br />
                  {row.cost[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        {/* Discounts per order */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{t("materials.discount")}</span>
          </p>
        </div>
        <h2 className={`${styles.heading2} xs:text-[20px]`}>
          {t("materials.heading")} <br className="md:block hidden" />{" "}
          <span className="text-gradient">{t("materials.subheading")}</span>
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          {t("materials.description")}
        </p>
      </div>
    </section>
  );
};

export default Materials;
