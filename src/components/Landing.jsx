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
          <h1 className={`font-poppins font-semibold sm:text-[90px] ss:text-[70px] text-[55px] text-white sm:leading-[110px] ss:leading-[100px] leading-[75px]`}>
            {t('headline.part1')} <br className="md:block hidden" />
            <span className="text-gradient">{t('headline.part2')}</span>{" "}
            <br className="ss:block hidden" />
            {t('headline.part3')}
            <br className="sm:block hidden" />
            <span className="text-gradient"> {t('headline.part4')}</span>
          </h1>
        </div>

        <button
          onClick={handleShopNow}
          className={styles.button} // Applying button styles from the styles object
        >
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <img src={shopping_cart} alt="shopping cart" className="shopping_cart" style={{ marginRight: '8px' }} />
            Shop Now!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Landing;
