"use client";

import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Swiper.module.scss";
import Dots from "./Dots/Dots";
import Content from "./Content/Content";

type SwiperType = {
  // eslint-disable-next-line
  swiperContent: any[];
  children: ReactNode[];
  slidesToShow: number;
};

const Swiper = ({ swiperContent, slidesToShow, children }: SwiperType) => {
  const len = swiperContent.length;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + slidesToShow;
        return nextIndex >= len ? 0 : nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [len, slidesToShow]);

  return (
    <div className={styles.swiper}>
      <Content
        activeIndex={activeIndex}
        swiperContent={swiperContent}
        slidesToShow={slidesToShow}
      >
        {children}
      </Content>
      <Dots
        activeIndex={activeIndex}
        swiperContent={swiperContent}
        onClick={setActiveIndex}
        slidesToShow={slidesToShow}
      />
    </div>
  );
};

export default Swiper;
