const InfoSection = ({ title, children }) => {
  return (
    <section className="card-info--section">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default InfoSection;
