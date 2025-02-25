import Button from "@/components/shared/Button/Button";
import styles from "./Projects.module.scss";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Swiper from "../../../shared/Swiper/Swiper";
import { projects } from "@/data/fake";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className={`${styles.projects} container`}>
      <div className={styles.projects__top}>
        <h2>
          Lets have a look at my <span>Portfolio</span>
        </h2>
        <Button
          name="See all"
          style={{
            height: 56,
          }}
        />
      </div>
      <Swiper swiperContent={projects} slidesToShow={2}>
        {projects.map((project) => (
          <ProjectCard
            key={`project__${project.id}`}
            options={{
              name: project.name,
              url: project.path,
              image: project.image,
            }}
          />
        ))}
      </Swiper>

      <ProjectInfo />
    </section>
  );
};

export default Projects;
