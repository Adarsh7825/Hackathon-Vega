import Desktop2 from "../components/Desktop2";
import Desktop1 from "../components/Desktop1";
import Desktop from "../components/Desktop";
import styles from "./FrameHeader.module.css";

const FrameHeader = () => {
  return (
    <div className={styles.profile}>
      <Desktop2 />
      <section className={styles.textFrame}>
        <div className={styles.textFrame1}>
          <Desktop1 />
          <Desktop />
        </div>
      </section>
    </div>
  );
};

export default FrameHeader;
