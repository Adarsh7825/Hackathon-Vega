import CompanyFramesPair1 from "../components/CompanyFramesPair1";
import FrameComponent from "../components/FrameComponent";
import CompanyFramesPair from "../components/CompanyFramesPair";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.productPageChild} />
      {/* <header className={styles.subFrameA}>
        <div className={styles.subFrameB}>
          <h1 className={styles.campusPlacement}>Campus Placement</h1>
        </div>
        <div className={styles.calenderFrame}>
          <nav className={styles.resourceFrame}>
            <nav className={styles.forumFrame}>
              <div className={styles.companyNameText}>
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.companies}>Companies</div>
              <div className={styles.resourcesText}>
                <div className={styles.resources}>Resources</div>
              </div>
              <div className={styles.calender}>Calender</div>
              <div className={styles.myProfile}>My profile</div>
            </nav>
          </nav>
          <button className={styles.forum}>
            <img
              className={styles.iconCommentSquare}
              alt=""
              src="/-icon-comment-square.svg"
            />
            <div className={styles.forum1}>Forum</div>
          </button>
        </div>
      </header> */}
      <main className={styles.companyFrameBanglore}>
        <section className={styles.companyFrameGoogle}>
          <div className={styles.companyInfoSectionParent}>
            <div className={styles.companyInfoSection}>
              <h1 className={styles.companyProfiles}>Company Profiles</h1>
              <div className={styles.companyFrameWrapper}>
                <div className={styles.companyFrame}>
                  <button className={styles.defaultChip}>
                    <div className={styles.default}>Default</div>
                  </button>
                  <button className={styles.aZChip}>
                    <div className={styles.filter}>Filter</div>
                  </button>
                  <button className={styles.listChip}>
                    <div className={styles.listView}>List view</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <CompanyFramesPair1 />
          <FrameComponent />
          <CompanyFramesPair />
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
