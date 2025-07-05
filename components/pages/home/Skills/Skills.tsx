"use client";

import styles from "./Skills.module.scss";
import SkillCard from "./SkillCard/SkillCard";
import { SkillType } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { useLoader } from "@/components/providers/LoaderProvider";
import { getAllSkillsRequest } from "@/services/skills.service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = () => {
  const [skills, setSkills] = useState<SkillType[]>([]);
  const { setLoading } = useLoader();

  const get = async () => {
    setLoading(true);

    const { data, status } = await getAllSkillsRequest();
    if (status === 200) {
      setSkills(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          My <span>Skills</span>
        </h4>
        <p className={styles.subtitle}>
          Turning design into seamless digital experiences using modern frontend
          tools.
        </p>
      </div>
      <div className={styles.list}>
        <Swiper
          spaceBetween={16}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          modules={[Pagination, Autoplay, Keyboard]}
        >
          {skills.map((skill) => (
            <SwiperSlide key={`skill__${skill.id}`}>
              <SkillCard
                options={{
                  name: skill.name,
                  image: skill.image,
                  desc: skill.desc,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
