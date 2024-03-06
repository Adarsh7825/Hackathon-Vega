import styles from "./CompanyFramesPair1.module.css";

const CompanyFramesPair1 = () => {
  return (
    <div className={styles.companyInfoSection}>
      <h1 className={styles.companyProfiles}>Company Profiles</h1>
      <div className={styles.aZApplyButton}>
        <div className={styles.companyFrame}>
          <button className={styles.defaultChip}>
            <div className={styles.default}>Default</div>
          </button>
          <button className={styles.aZChip}>
            <div className={styles.filter}>Filter</div>
          </button>
          <button className={styles.listChip}>
            <div className={styles.listView}>List view</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyFramesPair1;
