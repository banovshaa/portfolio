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
      <div className={styles.card_header}>
        <h4>{options.name}</h4>
      </div>
      {options.image && (
        <div className={styles.img_container}>
          <Image src={options.image} alt="Skill image" />
        </div>
      )}
      <div className={styles.btn_wrapper}>
        <button>
          <ArrowIcon size={70} />
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
