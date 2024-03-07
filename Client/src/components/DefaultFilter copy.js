import CompanyFramesPair1 from "./CompanyFramesPair1";
import styles from "./DefaultFilter.module.css";

const DefaultFilter = () => {
  return (
    <div className={styles.defaultFilter}>
      <CompanyFramesPair1 />
      <div className={styles.divider} />
    </div>
  );
};

export default DefaultFilter;
