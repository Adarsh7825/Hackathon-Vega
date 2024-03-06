import Property1Default from "./Property1Default";
import FrameComponent1 from "./FrameComponent1";
import styles from "./CompanyFramesPair1.module.css";

const CompanyFramesPair1 = () => {
  return (
    <div className={styles.companyFramesPair}>
      <div className={styles.company2}>
        <div className={styles.bangloreKarnataka}>Banglore, Karnataka.</div>
        <img
          className={styles.edONeilAvvdzlhdowaUnsplashIcon}
          loading="lazy"
          alt=""
          src="/edoneilavvdzlhdowaunsplash-1@2x.png"
        />
        <div className={styles.companyGoogle}>
          <button className={styles.google}>
            <Property1Default />
          </button>
        </div>
      </div>
      <FrameComponent1
        noonbrewZiCb4EKmakUnsplas="/noonbrewzicb4-ekmakunsplash@2x.png"
        microsoft="Microsoft"
        mumbaiMaharashtra="Mumbai,Maharashtra."
      />
      <div className={styles.company}>
        <img
          className={styles.noonbrewZicb4EkmakUnsplashIcon}
          alt=""
          src="/noonbrewzicb4-ekmakunsplash-1@2x.png"
        />
        <div className={styles.frameTCS}>
          <div className={styles.apple}>
            <div className={styles.frameFrame}>
              <img className={styles.appleIcon} alt="" src="/apple.svg" />
              <img className={styles.appleIcon1} alt="" src="/apple.svg" />
            </div>
            <div className={styles.listchip}>
              <div className={styles.bangaloreKarnataka}>
                Bangalore, Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFramesPair1;
