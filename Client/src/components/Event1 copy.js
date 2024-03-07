import { useMemo } from "react";
import styles from "./Event1.module.css";

const Event1 = ({
  end,
  aMPM,
  videoCamera,
  end1,
  bar,
  showHour,
  propHeight,
  propTop,
  propBackgroundColor,
  propPadding,
  propBottom,
  propLeft,
  propRight,
  propWidth,
  propAlignSelf,
  propBackgroundColor1,
  propHeight1,
  propAlignSelf1,
  propPadding1,
  propFlexDirection,
  propPosition,
  propAlignSelf2,
  propFlex,
  propColor,
  propColor1,
  propBackgroundColor2,
  propWidth1,
  propDisplay,
  propAlignSelf3,
  propColor2,
  propPosition1,
  propFlex1,
  propMargin,
  propBottom1,
  propLeft1,
}) => {
  const eventStyle = useMemo(() => {
    return {
      height: propHeight,
      top: propTop,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      bottom: propBottom,
      left: propLeft,
      right: propRight,
      width: propWidth,
    };
  }, [
    propHeight,
    propTop,
    propBackgroundColor,
    propPadding,
    propBottom,
    propLeft,
    propRight,
    propWidth,
  ]);

  const barStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      backgroundColor: propBackgroundColor1,
      height: propHeight1,
    };
  }, [propAlignSelf, propBackgroundColor1, propHeight1]);

  const bodyStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      padding: propPadding1,
      flexDirection: propFlexDirection,
      position: propPosition,
    };
  }, [propAlignSelf1, propPadding1, propFlexDirection, propPosition]);

  const timeStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      flex: propFlex,
    };
  }, [propAlignSelf2, propFlex]);

  const endStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const aMPMStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const hourStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const end1Style = useMemo(() => {
    return {
      width: propWidth1,
      display: propDisplay,
      alignSelf: propAlignSelf3,
      color: propColor2,
      position: propPosition1,
      flex: propFlex1,
      margin: propMargin,
      bottom: propBottom1,
      left: propLeft1,
    };
  }, [
    propWidth1,
    propDisplay,
    propAlignSelf3,
    propColor2,
    propPosition1,
    propFlex1,
    propMargin,
    propBottom1,
    propLeft1,
  ]);

  return (
    <div className={styles.event} style={eventStyle}>
      {!bar && <div className={styles.bar} style={barStyle} />}
      <div className={styles.body} style={bodyStyle}>
        <div className={styles.time} style={timeStyle}>
          <div className={styles.end} style={endStyle}>
            {end}
          </div>
          <div className={styles.ampm} style={aMPMStyle}>
            {aMPM}
          </div>
          {showHour && (
            <div className={styles.hour} style={hourStyle}>
              <img
                className={styles.videoCameraIcon}
                loading="lazy"
                alt=""
                src={videoCamera}
              />
            </div>
          )}
        </div>
        <div className={styles.end1} style={end1Style}>
          {end1}
        </div>
      </div>
    </div>
  );
};

export default Event1;
