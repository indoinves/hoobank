import styles from "../styles/style";
import landing_page from "../assets/video/landing_page.mp4";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();

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
          <h1 className={`font-poppins font-semibold sm:text-[110px] ss:text-[100px] text-[55px] text-white sm:leading-[140px] ss:leading-[110px] leading-[70px]`}>
            {t('headline.part1')} <br className="md:block hidden" />
            <span className="text-gradient">{t('headline.part2')}</span>{" "}
            <br className="md:block hidden" />
            {t('headline.part3')} <span className="text-gradient">{t('headline.part4')}</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} text-[20px] md:max-w-[500px] md:mt-10 mt-20`}>
          <i>
            {t('quote.text')}
          </i>
          <br />
          {t('quote.author')}
        </p>
      </div>
    </section>
  );
};

export default Landing;
