import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__left}></div>
      <div className={styles.about__right}>
        <h2>
          Why <span>Hire me</span>?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
        <button>Hire me</button>
      </div>
    </section>
  );
};

export default About;
