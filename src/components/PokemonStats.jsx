import { useContext, useEffect, useState } from "react";
import PokemonContext from "../contexts/PokemonContext";
import "./PokemonStats.css";

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
      <div className="card">
        <h2>{searchPoke.name.toUpperCase()}</h2>
        <img src={searchPoke.sprites.front_default} />
        <h3>stats</h3>
        <ul className = "stats">
          {searchPoke.stats.map((el) => (
            <div>
              <li key={el.stat.name}>{el.stat.name}</li>
              <li key={el.base_stat}>{el.base_stat}</li>
            </div>
          ))}
        </ul>
        <h3>abilities</h3>
        <ul className = "abilities">
          {searchPoke.abilities.map((el) => (
            <li key={el.ability.name}>{el.ability.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PokemonStats;
