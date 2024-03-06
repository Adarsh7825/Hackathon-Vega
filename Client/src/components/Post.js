import { useMemo } from "react";
import styles from "./Post.module.css";

const Post = ({
  rectangle24,
  bitcoinHasTumbledFromItsR,
  finance,
  bitcoin,
  crypto1,
  memojiBoys315,
  pavelGvay,
  weeksAgo,
  views,
  likes,
  comments,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const postStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={styles.post} style={postStyle}>
      <div className={styles.main}>
        <div className={styles.wrapperRectangle24}>
          <img
            className={styles.wrapperRectangle24Child}
            loading="lazy"
            alt=""
            src={rectangle24}
          />
        </div>
        <div className={styles.data}>
          <div className={styles.data1}>
            <div className={styles.title}>
              <h2 className={styles.bitcoinHasTumbled}>
                {bitcoinHasTumbledFromItsR}
              </h2>
              <div className={styles.tags}>
                <button className={styles.tag}>
                  <div className={styles.finance}>{finance}</div>
                </button>
                <button className={styles.tag1}>
                  <div className={styles.bitcoin}>{bitcoin}</div>
                </button>
                <button className={styles.tag2}>
                  <div className={styles.crypto}>{crypto1}</div>
                </button>
              </div>
            </div>
            <div className={styles.user}>
              <div className={styles.avatars}>
                <div className={styles.avatarsChild} style={ellipseDivStyle} />
                <img
                  className={styles.memojiBoys315}
                  loading="lazy"
                  alt=""
                  src={memojiBoys315}
                />
              </div>
              <div className={styles.name}>
                <div className={styles.name1}>
                  <div className={styles.name2}>
                    <h3 className={styles.pavelGvay}>{pavelGvay}</h3>
                    <div className={styles.nameChild} />
                  </div>
                  <div className={styles.weeksAgo}>{weeksAgo}</div>
                </div>
                <div className={styles.action}>
                  <div className={styles.views}>{views}</div>
                  <div className={styles.likes}>{likes}</div>
                  <div className={styles.comments}>{comments}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.love}>
            <img className={styles.iconlike} alt="" src="/iconlike-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
