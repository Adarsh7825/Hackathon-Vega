import { useMemo } from "react";
import styles from "./Company.module.css";

const Company = ({
  edONeilAvvdZlhDowAUnsplas,
  amazon,
  hyderabadTelangana,
  propPadding,
  propWidth,
  propFlex,
}) => {
  const amazonGurugramFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const amazonStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.company}>
      <img
        className={styles.edONeilAvvdzlhdowaUnsplashIcon}
        alt=""
        src={edONeilAvvdZlhDowAUnsplas}
      />
      <div
        className={styles.amazonGurugramFrame}
        style={amazonGurugramFrameStyle}
      >
        <h1 className={styles.amazon} style={amazonStyle}>
          {amazon}
        </h1>
      </div>
      <div className={styles.openAIFrame}>
        <div className={styles.hyderabadTelangana}>{hyderabadTelangana}</div>
      </div>
    </div>
  );
};

export default Company;
