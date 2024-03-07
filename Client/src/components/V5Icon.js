import styles from "./V5Icon.module.css";

const V5Icon = ({ v5Icon }) => {
  return !v5Icon && <img className={styles.v5Icon} alt="" src="/v5.svg" />;
};

export default V5Icon;
