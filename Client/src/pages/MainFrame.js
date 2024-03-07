import FrameComponent1 from "../components/FrameComponent1";
import FrameResources from "../components/FrameResources";
import styles from "./MainFrame.module.css";

const MainFrame = () => {
  return (
    <div className={styles.mainFrame}>
      <div className={styles.mainFrameChild} />
      {/* <FrameComponent1 /> */}
      <FrameResources />
    </div>
  );
};

export default MainFrame;
