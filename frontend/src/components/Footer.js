import PropTypes from "prop-types";
import styles from "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.swasthyaLogo}>
          <img
            className={styles.swasthyaLogoChild}
            loading="lazy"
            alt=""
            src="/group-1000001817-1.svg"
          />
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor.
          </div>
          <b className={styles.infoswasthyacom}>info@swasthya.com</b>
          <div className={styles.menu1}>Menu 1</div>
          <b className={styles.company}>Company</b>
          <div className={styles.menu2}>Menu 2</div>
          <div className={styles.menu3}>Menu 3</div>
          <div className={styles.menu4}>Menu 4</div>
          <div className={styles.menu5}>Menu 5</div>
          <div className={styles.menu11}>Menu 1</div>
          <b className={styles.forCustomers}>For customers</b>
          <div className={styles.menu21}>Menu 2</div>
          <div className={styles.menu31}>Menu 3</div>
          <div className={styles.menu41}>Menu4</div>
          <div className={styles.menu51}>Menu 5</div>
          <div className={styles.menu12}>Menu 1</div>
          <b className={styles.forPartners}>For partners</b>
          <div className={styles.menu22}>Menu 2</div>
          <div className={styles.menu32}>Menu 3</div>
          <div className={styles.menu42}>Menu4</div>
          <div className={styles.menu52}>Menu 5</div>
          <b className={styles.socialLink}>Social Link</b>
          <img
            className={styles.instagram1Icon}
            loading="lazy"
            alt=""
            src="/instagram-1.svg"
          />
          <img
            className={styles.linkedinInIcon}
            loading="lazy"
            alt=""
            src="/linkedinin.svg"
          />
          <img
            className={styles.facebook1Icon}
            loading="lazy"
            alt=""
            src="/facebook-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
