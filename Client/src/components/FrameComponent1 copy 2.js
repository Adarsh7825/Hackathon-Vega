import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.campusPlacementsWrapper}>
        <h1 className={styles.campusPlacements}>Campus Placements</h1>
      </div>
      <nav className={styles.headerFrame}>
        <div className={styles.menuFrame}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.companies}>Companies</div>
        <div className={styles.menuFrame1}>
          <div className={styles.resources}>Resources</div>
        </div>
        <div className={styles.menuFrame2}>
          <div className={styles.calender}>Calender</div>
        </div>
        <div className={styles.menuFrame3}>
          <div className={styles.forum}>Forum</div>
        </div>
        <div className={styles.menuFrame4}>
          <div className={styles.myProfile}>My profile</div>
        </div>
      </nav>
    </div>
  );
};

export default FrameComponent1;
