import { useMemo } from "react";
import styles from "./Meetups.module.css";

const Meetups = ({
  prop,
  uIHUTCrunchbaseCompanyPro,
  rectangle32,
  uIHUTSylhetBangladesh,
  remote,
  partTime,
  propMargin,
  propPosition,
  propRight,
  propBottom,
  propColor,
  propWidth,
  propFlex,
  propFlex1,
  propFlex2,
}) => {
  const meetupsStyle = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition,
      right: propRight,
      bottom: propBottom,
    };
  }, [propMargin, propPosition, propRight, propBottom]);

  const bStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const profileStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const uIHUTSylhetStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tagStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const remoteStyle = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  return (
    <div className={styles.meetups} style={meetupsStyle}>
      <div className={styles.date}>
        <h3 className={styles.feb}>FEB</h3>
        <b className={styles.b} style={bStyle}>
          {prop}
        </b>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>
          <h3 className={styles.uihutCrunchbase}>
            {uIHUTCrunchbaseCompanyPro}
          </h3>
          <div className={styles.profile} style={profileStyle}>
            <img className={styles.profileChild} alt="" src={rectangle32} />
            <div className={styles.uihutSylhet} style={uIHUTSylhetStyle}>
              {uIHUTSylhetBangladesh}
            </div>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag} style={tagStyle}>
            <div className={styles.remote} style={remoteStyle}>
              {remote}
            </div>
          </div>
          <div className={styles.tag1}>
            <div className={styles.partTime}>{partTime}</div>
          </div>
          <div className={styles.tag2}>
            <div className={styles.worldwide}>Worldwide</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetups;
