import { useMemo } from "react";
import styles from "./Title.module.css";

const Title = ({
  employmentExpeditionNavig,
  yourPathToSuccess,
  rectangle32,
  dribbbleAustinTexasUSA,
  propAlignSelf,
}) => {
  const titleStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.title} style={titleStyle}>
      <h3 className={styles.designMeetupsUsaContainer}>
        <p className={styles.employmentExpeditionNavigat}>
          {employmentExpeditionNavig}
        </p>
        <p className={styles.yourPathTo}>{yourPathToSuccess}</p>
      </h3>
      <div className={styles.profile}>
        <img className={styles.profileChild} alt="" src={rectangle32} />
        <div className={styles.dribbbleAustin}>{dribbbleAustinTexasUSA}</div>
      </div>
    </div>
  );
};

export default Title;
