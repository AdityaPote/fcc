const CardPhoto = ({ photo }) => {
  return (
    <div
      className="card-photo"
      style={{ backgroundImage: `url(${photo.url})` }}
    ></div>
  );
};

export default CardPhoto;
