import styles from "./FrameResources.module.css";

const FrameResources = () => {
  return (
    <section className={styles.frameResources}>
      <div className={styles.unlockFrame}>
        <div className={styles.potentialFrame}>
          <img
            className={styles.why20is20training2020placementIcon}
            alt=""
            src="/why20is20training2020placement20cell20important1-1@2x.png"
          />
          <h1 className={styles.unlockYourPotentialContainer}>
            <p
              className={styles.unlockYourPotential}
            >{`Unlock Your Potential `}</p>
            <p className={styles.joinThisPlatform}>
              {" "}
              Join this platform for Career Growth
            </p>
          </h1>
        </div>
        <div className={styles.frameAllResources}>
          <div className={styles.trendsFrame}>
            <div className={styles.projecticon}>
              <div className={styles.allinoneprojectbluegradientcon}>
                <img
                  className={styles.allInOneProjectBlueGradieIcon}
                  loading="lazy"
                  alt=""
                  src="/allinoneprojectbluegradientconcepticonvector40918479-1@2x.png"
                />
              </div>
              <h3 className={styles.allResourcesInContainer}>
                <p className={styles.allResources}>{`ALL RESOURCES `}</p>
                <p className={styles.inOnePlace}>IN ONE PLACE</p>
              </h3>
            </div>
          </div>
          <div className={styles.stayInformedFrame}>
            <div className={styles.interviewPrepText}>
              <img
                className={styles.stayInformedOfTrendsBlueGIcon}
                loading="lazy"
                alt=""
                src="/stayinformedoftrendsbluegradientconcepticonawarenessupgradeprofessionalknowledgesabstractideathinlineillustrationisolatedoutlinedrawingvector-1@2x.png"
              />
              <div className={styles.informedTrends}>
                <img
                  className={styles.interviewPrepIcon}
                  loading="lazy"
                  alt=""
                  src="/3-7@2x.png"
                />
                <h3 className={styles.interviewPrepAnd}>
                  Interview prep and mocks
                </h3>
              </div>
            </div>
            <div className={styles.downloadButton}>
              <img
                className={styles.download41}
                loading="lazy"
                alt=""
                src="/download-4-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameResources;
