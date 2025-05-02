"use client";

import Swiper from "../../../shared/Swiper/Swiper";
import styles from "./Skills.module.scss";
import SkillCard from "./SkillCard/SkillCard";
import { SkillType } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { useLoader } from "@/components/providers/LoaderProvider";
import { getAllSkillsRequest } from "@/services/skills.service";

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
    <section className={`${styles.skills} container`}>
      <div className={styles.title_wrapper}>
        <h4 className={styles.title}>
          My <span>Skills</span>
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
