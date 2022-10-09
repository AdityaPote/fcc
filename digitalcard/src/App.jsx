import "./App.css";
import imageUrl from "./assets/profile_img.jpg";
import BuisnessCard from "./components/BuisnessCard";

const App = () => {
  const cardPhoto = {
    url: imageUrl,
    altText: "Profile photo",
  };

  const cardData = {
    photo: cardPhoto,
    content: {
      name: "Aditya Pote",
      title: "Full-stack Web Developer",
      website: "https://www.linkedin.com/in/aditya-pote11/",
    },
  };

  return (
    <div className="App">
      <BuisnessCard user={cardData} />
    </div>
  );
};

export default App;
