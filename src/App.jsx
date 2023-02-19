import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import { Container, Row } from "react-bootstrap";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokeFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <>
      <Header pokeFilter={pokeFilter} />
      <Container>
        <Row style={{ alignItens: "center", justifyContent: "center" }}>
          {pokemons.map((pokemon, key) => (
            <PokeCard
              key={key}
              name={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              types={pokemon.data.types}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
