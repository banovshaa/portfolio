import Image from "next/image";
import { ArrowIcon } from "@/assets/images/shared.vector";
import styles from "./SkillCard.module.scss";
import { StaticImageData } from "next/image";

type CardOptions = {
  name: string;
  image?: StaticImageData;
};
const SkillCard = ({ options }: { options: CardOptions }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h4>{options.name}</h4>
      </div>
      {options.image && (
        <div className={styles.img__container}>
          <Image src={options.image} alt="Skill image" />
        </div>
      )}
      <div className={styles.btn__wrapper}>
        <button>
          <ArrowIcon size={70} />
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
