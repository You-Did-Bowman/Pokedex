import PokemonContext from "../contexts/PokemonContext";
import { useContext, useState } from "react";
import PokemonStats from "./PokemonStats";

function SearchForm() {
  const { pokemon, setPokemon } = useContext(PokemonContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(inputValue)
  }

  return (
    <>
      <div>Search</div>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="text">
          <input onChange={handleChange}></input>
        </label>
        <button>Search</button>
      </form>
      {pokemon && <PokemonStats />}
    </>
  );
}

export default SearchForm;
