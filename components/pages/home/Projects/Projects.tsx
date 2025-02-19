import Button from "@/components/shared/Button/Button";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={`${styles.projects} container`}>
      <div className={styles.projects__top}>
        <h2>
          Lets have a look at my <span>Portfolio</span>
        </h2>
        <Button name="See all" height={56} />
      </div>
    </section>
  );
};

export default Projects;
