import Pokecard from "./Pokecard.jsx";

function Pokedex({ pokemon }) {

  return pokemon.map(
    p => <Pokecard name={p.name} type={p.type} exp={p.base_experience} />);
}

export default Pokedex;