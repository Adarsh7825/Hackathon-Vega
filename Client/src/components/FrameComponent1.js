import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  noonbrewZiCb4EKmakUnsplas,
  microsoft,
  mumbaiMaharashtra,
  propWidth,
  propFlex,
}) => {
  const companynoonbrewziCbEKmakunsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const microsoftStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.company1Wrapper}>
      <div className={styles.company1}>
        <img
          className={styles.noonbrewZicb4EkmakUnsplashIcon}
          loading="lazy"
          alt=""
          src={noonbrewZiCb4EKmakUnsplas}
        />
        <div
          className={styles.companynoonbrewziCbEKmakuns}
          style={companynoonbrewziCbEKmakunsStyle}
        >
          <h1 className={styles.microsoft} style={microsoftStyle}>
            {microsoft}
          </h1>
        </div>
        <div className={styles.cityMumbaiMaharashtra}>
          <div className={styles.mumbaimaharashtra}>{mumbaiMaharashtra}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
