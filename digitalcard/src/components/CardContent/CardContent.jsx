import CardName from "./CardName";
import SocialButton from "./SocialButton";
import CardInfo from "./CardInfo/CardInfo";
import InfoSection from "./CardInfo/InfoSection";

const CardContent = ({ content }) => {
  return (
    <div className="card-content">
      <CardName
        name={content.name}
        title={content.title}
        site={content.website}
      />
      <div className="card-buttons">
        <SocialButton iconClass="fa-solid fa-envelope" text="Email" />
        <SocialButton iconClass="fa-brands fa-linkedin" text="LinkedIn" />
      </div>
      <CardInfo>
        <InfoSection title="About">
          Hello,I am Aditya Pote, a Dual-Degree (B.Tech+M-Tech) student at
          IIIT-Gwalior, experienced in Full-Stack Web Development and currently
          exploring Blockchain and Machine Learning
        </InfoSection>
        <InfoSection title="Interests">
          Web Development and Machine Learning
        </InfoSection>
      </CardInfo>
    </div>
  );
};

export default CardContent;
