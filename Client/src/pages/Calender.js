import FrameSet from "../components/FrameSet";
import TextInstance from "../components/TextInstance";
import styles from "./Calender.module.css";

const Calender = () => {
  return (
    <div className={styles.calender}>
      <div className={styles.divider} />
      <div className={styles.calenderChild} />
      <FrameSet />
      <div className={styles.february1} />
      <TextInstance />
    </div>
  );
};

export default Calender;
