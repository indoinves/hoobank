import styles from "../styles/style";
import landing_page from "../assets/video/landing_page.mp4";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { shopping_cart } from "../assets";

const Landing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <section
      id="home"
      className={`flex`}
    >
      <div className={`landing-wrapper`}>
        <video src={landing_page} autoPlay muted loop className={`video-style`}></video>
      </div>
      <div
        className={`landing-title md:px-40 px-10`}
      >
        {/* Main text */}
        <div className="w-full">
          <h1 className={`font-poppins font-semibold md:text-[80px] sm:text-[60px] ss:text-[48px] text-[45px] text-white sm:leading-[120px] ss:leading-[100px] leading-[75px]`}>
            <br className="block" />
            {t('headline.part1')} <span className="text-gradient">{t('headline.part2')}</span>{", "}
            <br className="block" />
            {t('headline.part3')} {t('headline.part4')}
          </h1>
        </div>

        <br className="ss:block hidden" />

        <button
          onClick={handleShopNow}
          className={styles.button} // Applying button styles from the styles object
        >
          <a href="#" className = {`button-text`}>
            <img src={shopping_cart} alt="shopping cart" className="shopping_cart" style={{ marginRight: '8px' }} />
            {t('shopButton')}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Landing;
