const CardFooter = ({ brands }) => {
  const icons = brands.map((brand) => {
    return <i className={`fa-brands fa-${brand}`}></i>;
  });

  return <footer className="footer">{icons}</footer>;
};

export default CardFooter;
