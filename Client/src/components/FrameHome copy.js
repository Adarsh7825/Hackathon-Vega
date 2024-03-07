import styles from "./FrameHome.module.css";

const FrameHome = () => {
  return (
    <header className={styles.frameHome}>
      <div className={styles.resourcesFrame}>
        <div className={styles.calendarFrame}>
          <h1 className={styles.campusPlacement}>Campus Placement</h1>
        </div>
        <div className={styles.myProfileFrame}>
          <div className={styles.frameCompany}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.companies}>Companies</div>
          <div className={styles.resourcesText}>
            <div className={styles.resources}>Resources</div>
          </div>
          <div className={styles.frameCompany1}>
            <div className={styles.calender}>Calender</div>
          </div>
          <div className={styles.frameCompany2}>
            <div className={styles.forum}>Forum</div>
          </div>
          <div className={styles.frameCompany3}>
            <div className={styles.myProfile}>My profile</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameHome;
