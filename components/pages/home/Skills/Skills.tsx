import { skills } from "@/data/fake";
import Swiper from "../../../shared/Swiper/Swiper";
import styles from "./Skills.module.scss";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  return (
    <section className={`${styles.skills} container`}>
      <div className={styles.title__wrapper}>
        <h4 className={styles.title}>
          My <span>Services</span>
        </h4>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      <Swiper swiperContent={skills} slidesToShow={3}>
        {skills.map((skill) => (
          <SkillCard
            key={`skill__${skill.id}`}
            options={{
              name: skill.name,
              image: skill.image,
            }}
          />
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
