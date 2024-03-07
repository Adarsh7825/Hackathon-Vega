import styles from "./V22Icon.module.css";

const V22Icon = ({ v22Icon }) => {
  return (
    !v22Icon && <img className={styles.v22Icon} alt="" src="/v22@2x.png" />
  );
};

export default V22Icon;
