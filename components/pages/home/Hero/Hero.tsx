import { AttributeIcon, QuotIcon } from "@/assets/images/shared.vector";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.element_wrapper}>
        <div className={styles.badge}>
          <span>Hello!</span>
          <span className={styles.icon}>
            <AttributeIcon size={24} />
          </span>
        </div>
      </div>
      <h1 className={styles.title}>
        I’m <span>Banovsha</span>, <br />
        Front-End Developer
        <span className={styles.icon}>
          <AttributeIcon size={66} />
        </span>
      </h1>
      <QuotIcon />
      <p className={styles.comment}>
        With a keen eye for detail and a drive to constantly learn, I craft
        seamless user experiences that bring ideas to life.
      </p>
      <div className={styles.element_wrapper}>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Hero;
