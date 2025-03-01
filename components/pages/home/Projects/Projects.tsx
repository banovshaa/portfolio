"use client";

import Button from "@/components/shared/Button/Button";
import styles from "./Projects.module.scss";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Swiper from "../../../shared/Swiper/Swiper";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { ProjectType } from "@/interfaces/interfaces";
import { getAllProjectsRequest } from "@/services/projects.service";
import { useLoader } from "@/components/providers/LoaderProvider";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const { setLoading } = useLoader();

  const get = async () => {
    setLoading(true);

    const { data, status } = await getAllProjectsRequest();
    if (status === 200) {
      setProjects(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

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
        {projects.map((project: ProjectType) => (
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
