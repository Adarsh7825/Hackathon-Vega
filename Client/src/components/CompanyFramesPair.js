import Company from "./Company";
import FrameComponent1 from "./FrameComponent1";
import styles from "./CompanyFramesPair.module.css";

const CompanyFramesPair = () => {
  return (
    <div className={styles.companyFramesPair}>
      <Company
        edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1-2@2x.png"
        amazon={`L & T`}
        hyderabadTelangana="Pune, Maharashtra."
        propPadding="0px var(--padding-5xl)"
        propWidth="unset"
        propFlex="unset"
      />
      <FrameComponent1
        noonbrewZiCb4EKmakUnsplas="/noonbrewzicb4-ekmakunsplash-4@2x.png"
        microsoft="Infosys"
        mumbaiMaharashtra="Bangalore, Karnataka"
        propWidth="unset"
        propFlex="unset"
      />
      <Company
        edONeilAvvdZlhDowAUnsplas="/noonbrewzicb4-ekmakunsplash-5@2x.png"
        amazon="TCS"
        hyderabadTelangana="Mumbai, Maharashtra."
        propPadding="0px var(--padding-mid)"
        propWidth="178px"
        propFlex="1"
      />
    </div>
  );
};

export default CompanyFramesPair;
