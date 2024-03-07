import styles from "./HourRow1.module.css";

const HourRow = () => {
  return (
    <div className={styles.hourRow}>
      <div className={styles.time}>7 AM</div>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={styles.block1} />
          <div className={styles.block2} />
        </div>
        <div className={styles.block3}>
          <div className={styles.block4} />
          <div className={styles.block5} />
        </div>
        <div className={styles.block6}>
          <div className={styles.block7} />
          <div className={styles.block8} />
        </div>
        <div className={styles.block9}>
          <div className={styles.block10} />
          <div className={styles.block11} />
        </div>
        <div className={styles.block12}>
          <div className={styles.block13} />
          <div className={styles.block14} />
        </div>
        <div className={styles.block15}>
          <div className={styles.block16} />
          <div className={styles.block17} />
        </div>
        <div className={styles.block18}>
          <div className={styles.block19} />
          <div className={styles.block20} />
        </div>
      </div>
      <div className={styles.time1}>7 AM</div>
    </div>
  );
};

export default HourRow;
