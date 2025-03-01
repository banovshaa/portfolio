import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <span className={styles.loader}>
      <div className={styles.lds}></div>
    </span>
  );
};

export default Loader;
