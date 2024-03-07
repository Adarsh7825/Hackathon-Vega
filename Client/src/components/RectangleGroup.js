import { useMemo } from "react";
import styles from "./RectangleGroup.module.css";

const RectangleGroup = ({ group15, applicationDeadline, propMinWidth }) => {
  const lineStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.rectangleGroup}>
      <div className={styles.rectangleShape} />
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group15}
        />
        <div className={styles.line} style={lineStyle}>
          <b className={styles.applicationDeadline}>{applicationDeadline}</b>
          <div className={styles.am1200}>8:00 AM - 12:00 PM</div>
        </div>
      </div>
      <img
        className={styles.moreVertical3Icon}
        alt=""
        src="/morevertical-3.svg"
      />
    </div>
  );
};

export default RectangleGroup;
