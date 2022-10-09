const CardName = ({ name, title, site }) => {
  return (
    <div className="card-name">
      <h2 className="card-name--name">{name}</h2>
      <p className="card-name--title">{title}</p>
      <p className="card-name--site">{site}</p>
    </div>
  );
};

export default CardName;
