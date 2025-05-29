"use client";

import Button from "@/components/shared/Button/Button";
import styles from "./Projects.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { ProjectType } from "@/interfaces/interfaces";
import { getAllProjectsRequest } from "@/services/projects.service";
import { useLoader } from "@/components/providers/LoaderProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
    <section id="project" className={`${styles.projects} container`}>
      <div className={styles.projects_top}>
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
      <Swiper
        spaceBetween={16}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {projects.map((project: ProjectType) => (
          <SwiperSlide key={`project__${project.id}`}>
            <ProjectCard
              options={{
                name: project.name,
                url: project.path,
                image: project.image,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
