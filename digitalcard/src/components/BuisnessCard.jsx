import CardPhoto from "./CardPhoto";
import CardContent from "./CardContent/CardContent";
import CardFooter from "./CardFooter";

const BuisnessCard = ({ user }) => {
  return (
    <div className="card">
      <CardPhoto photo={user.photo} />
      <CardContent content={user.content} />
      <CardFooter brands={["twitter", "facebook", "instagram", "pinterest"]} />
    </div>
  );
};

export default BuisnessCard;
