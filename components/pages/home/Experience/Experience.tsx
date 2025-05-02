import { experiences } from "@/constants/navigation.constant";
import styles from "./Experience.module.scss";
import Timeline from "./Timeline/Timeline";

const Experience = () => {
  return (
    <section className={`${styles.experience} container`}>
      <h2>
        My <span>Work Experience</span>
      </h2>
      {/* <div className={styles.experience__list}>
        {experiences.map((experience, index) => (
          <div
            key={`${experience.name}__${index}`}
            className={styles.list__item}
          >
            <div className={styles.item__box}>
              <h4>{experience.location}</h4>
              <p>
                {experience.start_date}
                {experience.end_date && <span> - </span>}
                {experience.end_date}
              </p>
            </div>
            <div className={styles.dot}>
              <div
                className={styles.dot__inner}
                style={{ backgroundColor: index === 1 ? "#000" : "#7790ed" }}
              ></div>
              {index !== experiences.length - 1 && (
                <div className={styles.line}></div>
              )}
            </div>
            <div className={styles.item__box}>
              <h4>{experience.name}</h4>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      <Timeline timeline={experiences} />
    </section>
  );
};

export default Experience;
