import FrameHome from "../components/FrameHome";
import DefaultFilter from "../components/DefaultFilter";
import FrameComponent from "../components/FrameComponent";
import CompanyFramesPair from "../components/CompanyFramesPair";
import Company from "../components/Company";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={styles.companyProfiles}>
      <div className={styles.companyProfilesChild} />
      <FrameHome />
      <main className={styles.frameCompany}>
        <section className={styles.companyCompany}>
          <DefaultFilter />
          <FrameComponent />
          <CompanyFramesPair />
          <div className={styles.edoneilAvvdZlhDowAunsplash}>
            <Company />
            <div className={styles.companyWrapper}>
              <Company />
            </div>
            <Company />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
