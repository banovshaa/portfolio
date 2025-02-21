import { ReactNode } from "react";
import styles from "../Swiper.module.scss";

type DotProps = {
  activeIndex: number;
  onClick: (index: number) => void;
  swiperContent: ReactNode[];
  slidesToShow: number;
};
const Dots = ({
  activeIndex,
  onClick,
  slidesToShow,
  swiperContent,
}: DotProps) => {
  const pageCount = Math.ceil(swiperContent.length / slidesToShow);
  const handleClick = (index: number) => {
    const newIndex = index * slidesToShow;
    onClick(newIndex);
  };
  return (
    <div className={styles.dots}>
      {Array.from({ length: pageCount }).map((_, index) => (
        <div
          key={`dot__${index}`}
          className={`${styles.dot} ${
            activeIndex / slidesToShow === index ? styles.active : ""
          }`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
