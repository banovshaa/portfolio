import styles from "./Timeline.module.scss";
type TimelineElementProps = {
  id: number;
  name: string;
  location: string;
  description: string;
  start_date: string;
  end_date?: string;
};
const Timeline = ({ timeline }: { timeline: TimelineElementProps[] }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__progress}>
        <div className={styles.progress__bar}></div>
      </div>
      {timeline.map((element, index) => {
        return (
          <div
            key={`timeline__${index}`}
            className={`${styles.timeline__item}`}
          >
            <div className={styles.left}>
              <h3>{element.location}</h3>
            </div>
            <div className={styles.center}>
              <div className={styles.dot}>
                <div className={styles.dot__inner}></div>
              </div>
            </div>
            <div className={styles.right}>
              <p className={styles.subtitle}>{element.name}</p>
              <p className={styles.dates}>
                {element.start_date}
                {element.end_date && <span> - </span>}
                {element.end_date}
              </p>
              <p className={styles.desc}>{element.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
