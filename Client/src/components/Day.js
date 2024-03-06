import { useMemo } from "react";
import styles from "./Day.module.css";

const Day = ({
  sUN,
  emptyPlaceholder,
  propBackgroundColor,
  propBoxShadow,
  propOverflow,
  propWidth,
  propBorder,
  propOutline,
  propBackgroundColor1,
  propHeight,
  propDisplay,
  propMinWidth,
}) => {
  const dayStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
      overflow: propOverflow,
    };
  }, [propBackgroundColor, propBoxShadow, propOverflow]);

  const emptyPlaceholderStyle = useMemo(() => {
    return {
      width: propWidth,
      border: propBorder,
      outline: propOutline,
      backgroundColor: propBackgroundColor1,
      height: propHeight,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propWidth,
    propBorder,
    propOutline,
    propBackgroundColor1,
    propHeight,
    propDisplay,
    propMinWidth,
  ]);

  return (
    <div className={styles.day} style={dayStyle}>
      <b className={styles.sun}>{sUN}</b>
      <div className={styles.emptyPlaceholder} style={emptyPlaceholderStyle}>
        {emptyPlaceholder}
      </div>
    </div>
  );
};

export default Day;
