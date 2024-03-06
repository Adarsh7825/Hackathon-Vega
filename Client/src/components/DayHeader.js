import styles from "./DayHeader.module.css";

const DayHeader = ({ day }) => {
  return (
    <div className={styles.dayHeader}>
      <div className={styles.day}>{day}</div>
    </div>
  );
};

export default DayHeader;
