import "./Pokedex.css";
import Pokecard from "./Pokecard.jsx";

// Add default pokemon
import POKEMON from "./Pokegame.jsx";

/** Pokedex div of a collection of pokemon cards
 *
 * props:
 * pokemon: [{ id, name, type, base_experience },...]
 *
*/
function Pokedex({ pokemon = POKEMON }) {

  const pokecards = pokemon.map(
    p => <Pokecard
      name={p.name}
      type={p.type}
      exp={p.base_experience}
      id={p.id} />
  );
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-pokecards">{pokecards}</div>
    </div>);
}

export default Pokedex;