import styles from "./FrameSet.module.css";

const FrameSet = () => {
  return (
    <header className={styles.frameSet}>
      <div className={styles.arrowButton}>
        <h1 className={styles.campusPlacement}>Campus Placement</h1>
      </div>
      <div className={styles.dayToggle}>
        <div className={styles.rowFrame}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.companies}>Companies</div>
        <div className={styles.rowFrame1}>
          <div className={styles.resources}>Resources</div>
        </div>
        <div className={styles.rowFrame2}>
          <div className={styles.calender}>Calender</div>
        </div>
        <div className={styles.rowFrame3}>
          <div className={styles.forum}>Forum</div>
        </div>
        <div className={styles.iconButtonMaster}>
          <div className={styles.myProfile}>My profile</div>
        </div>
      </div>
    </header>
  );
};

export default FrameSet;
