export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
            alt="Icon from app"
            width={70}
            height={70}
          />
          <span>Pokemons</span>
        </a>
        <button className="btn btn-success">Favorites</button>
      </div>
    </nav>
  );
}
