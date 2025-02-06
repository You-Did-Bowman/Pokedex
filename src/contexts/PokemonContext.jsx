import { createContext, useState } from "react";

const PokemonContext = createContext();
export default PokemonContext;

function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState("");

  return (
    <>
      <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        {children}
      </PokemonContext.Provider>
    </>
  );
}

export { PokemonProvider };
