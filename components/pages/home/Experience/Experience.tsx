import { experiences } from "@/constants/navigation.constant";
import styles from "./Experience.module.scss";
import Timeline from "./Timeline/Timeline";

const Experience = () => {
  return (
    <section id="experience" className={`${styles.experience} container`}>
      <h2>
        My <span>Work Experience</span>
      </h2>
      <Timeline timeline={experiences} />
    </section>
  );
};

export default Experience;
