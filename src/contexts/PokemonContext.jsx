import { createContext, useState } from "react";

const PokemonContext = createContext();
export default PokemonContext;

function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState("");
  const [searchPoke, setSearchPoke] = useState(null);

  const data = {
    pokemon,
    setPokemon,
    searchPoke,
    setSearchPoke
  }

  return (
    <>
      <PokemonContext.Provider value={data}>
        {children}
      </PokemonContext.Provider>
    </>
  );
}

export { PokemonProvider };
