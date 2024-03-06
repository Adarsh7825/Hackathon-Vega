import Company from "./Company";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.companyParent}>
      <Company
        edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1-1@2x.png"
        amazon="Amazon"
        hyderabadTelangana="Hyderabad, Telangana."
      />
      <FrameComponent1
        noonbrewZiCb4EKmakUnsplas="/noonbrewzicb4-ekmakunsplash-2@2x.png"
        microsoft="Open AI"
        mumbaiMaharashtra="Bangalore, Karnataka"
        propWidth="unset"
        propFlex="unset"
      />
      <div className={styles.company}>
        <div className={styles.noonbrewZicb4EkmakUnsplashParent}>
          <img
            className={styles.noonbrewZicb4EkmakUnsplashIcon}
            alt=""
            src="/noonbrewzicb4-ekmakunsplash-3@2x.png"
          />
          <h1 className={styles.meta}>Meta</h1>
        </div>
        <div className={styles.gurugramHaryanaWrapper}>
          <div className={styles.gurugramHaryana}>Gurugram, Haryana</div>
        </div>
        <div className={styles.companyChild} />
      </div>
    </div>
  );
};

export default FrameComponent;
