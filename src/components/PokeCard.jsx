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
      <hr style={{ marginBottom: ".2rem" }} />
      <Card.Body
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column",
          textTransform: "capitalize",
        }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{typeHandler()}</Card.Subtitle>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
