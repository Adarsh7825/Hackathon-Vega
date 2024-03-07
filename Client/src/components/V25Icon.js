import { useMemo } from "react";
import styles from "./V25Icon.module.css";

const V25Icon = ({ v25Icon, propMarginBottom }) => {
  const v25IconStyle = useMemo(() => {
    return {
      marginBottom: propMarginBottom,
    };
  }, [propMarginBottom]);

  return (
    !v25Icon && (
      <img
        className={styles.v25Icon}
        alt=""
        src="/v25@2x.png"
        style={v25IconStyle}
      />
    )
  );
};

export default V25Icon;
