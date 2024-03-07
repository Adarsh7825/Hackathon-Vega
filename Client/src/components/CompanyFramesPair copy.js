import Company from "./Company";
import styles from "./CompanyFramesPair.module.css";

const CompanyFramesPair = () => {
  return (
    <div className={styles.companyCard}>
      <Company />
      <div className={styles.metaTitle}>
        <div className={styles.company}>
          <img
            className={styles.noonbrewZicb4EkmakUnsplashIcon}
            alt=""
            src="/noonbrewzicb4-ekmakunsplash-2@2x.png"
          />
          <div className={styles.unusedNodes}>
            <h1 className={styles.openAi}>Open AI</h1>
            <div className={styles.cityLabel}>
              <div className={styles.cityLabel1}>
                <div className={styles.bangaloreKarnataka}>
                  Bangalore, Karnataka
                </div>
              </div>
              <button className={styles.aZChip}>
                <div className={styles.apply}>Apply</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.company1}>
        <div className={styles.popoverFrame}>
          <img
            className={styles.noonbrewZicb4EkmakUnsplashIcon1}
            alt=""
            src="/noonbrewzicb4-ekmakunsplash-3@2x.png"
          />
          <img
            className={styles.noonbrewZicb4EkmakUnsplashIcon2}
            alt=""
            src="/noonbrewzicb4-ekmakunsplash-31@2x.png"
          />
        </div>
        <div className={styles.searchBarFrame}>
          <h1 className={styles.meta}>Meta</h1>
          <div className={styles.textFieldFrame}>
            <div className={styles.gurugramHaryana}>Gurugram, Haryana</div>
            <button className={styles.aZChip1}>
              <div className={styles.apply1}>Apply</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFramesPair;
