import React, { ReactNode } from "react";
import styles from "../Swiper.module.scss";

type ContentType = {
  activeIndex: number;
  swiperContent: ReactNode[];
  children: ReactNode[];
  slidesToShow: number;
};

const Content = ({
  activeIndex,
  swiperContent,
  slidesToShow,
  children,
}: ContentType) => {
  const visibleSlides = swiperContent.slice(
    activeIndex,
    activeIndex + slidesToShow
  );

  return (
    <section className={styles.content_wrapper}>
      {visibleSlides.map((_, index) => (
        <div
          key={`slide__${index}`}
          className={styles.content}
          style={{
            width: `calc(100% / ${slidesToShow})`,
          }}
        >
          {children[activeIndex + index]}
        </div>
      ))}
    </section>
  );
};
export default Content;
