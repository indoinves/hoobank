import React from "react";
import styles from "../styles/style";
import { useTranslation } from "react-i18next";

const Clients= () =>  {
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";
  // TODO: Replace with client key when this is in use
  const clients = [];

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
