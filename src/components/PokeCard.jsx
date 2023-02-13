import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PokeCard = ({ name, image, types }) => {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card style={{ width: "18rem", margin: "1.5rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{typeHandler()}</Card.Subtitle>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
