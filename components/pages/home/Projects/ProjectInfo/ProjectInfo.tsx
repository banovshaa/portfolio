import Link from "next/link";
import styles from "./ProjectInfo.module.scss";
import { ArrowIcon } from "@/assets/images/shared.vector";

const ProjectInfo = () => {
  return (
    <div className={styles.project__info}>
      <div className={styles.title}>
        <h2>Lirante - Food Dilvery Solution</h2>
        <Link href={"/"} className={styles.redirect__btn}>
          <ArrowIcon />
        </Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
        interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed lobortis orci elementum egestas lobortis.
      </p>
    </div>
  );
};

export default ProjectInfo;
