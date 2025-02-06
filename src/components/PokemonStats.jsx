import { useContext, useEffect, useState } from "react";
import PokemonContext from "../contexts/PokemonContext";

function PokemonStats() {
  const [searchPoke, setSearchPoke] = useState(null);
  const { pokemon } = useContext(PokemonContext);

  useEffect(() => {
    if (pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => setSearchPoke(data))
        .catch((error) => console.log(error));
    }
  }, [pokemon]);

  if (!searchPoke) {
    return <p>... Loading</p>;
  } else {
    console.log(searchPoke);
    
  }
  return (
    <>
      <div>Pokemon Stats</div>
      <p>{searchPoke.name}</p>
      <p>{searchPoke.height}</p>

    </>
  );
}

export default PokemonStats;
