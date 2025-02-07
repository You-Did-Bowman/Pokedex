import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="notFound">
        <h1>Pokemon not found!</h1>
        <p>But a wild Ghastly appears!</p>
      <img className = "ghastly-img"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
        alt="ghastly"
        />
        </div>
    </>
  );
}

export default NotFound;
