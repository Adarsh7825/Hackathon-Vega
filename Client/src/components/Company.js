import styles from "./Company.module.css";

const Company = () => {
  return (
    <div className={styles.company}>
      <img
        className={styles.edONeilAvvdzlhdowaUnsplashIcon}
        alt=""
        src="/edoneilavvdzlhdowaunsplash-1-1@2x.png"
      />
      <div className={styles.openAICard}>
        <h1 className={styles.amazon}>Amazon</h1>
        <div className={styles.amazonTitle}>
          <div className={styles.hyderabadTelangana}>Hyderabad, Telangana.</div>
          <button className={styles.aZChip}>
            <div className={styles.apply}>Apply</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
