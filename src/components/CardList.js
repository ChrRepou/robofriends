import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map(({ id, name, email }) => {
        return <Card id={id} name={name} email={email} key={id} />;
      })}
    </>
  );
};

export default CardList;
