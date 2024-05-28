import './Pokecard.css';

const POKEMON_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

/** Pokecard div of name, img, type, exp */
function Pokecard({ name, type, exp, id }) {

  const imgUrl =
    `${POKEMON_BASE_URL}/${id}.png`;

  return (<div className="Pokecard">
    <h1 className="Pokecard-name">{name}</h1>
    <img src={imgUrl} alt={name} className="Pokecard-img"></img>
    <p className="Pokecard-data">Type: {type}</p>
    <p className="Pokecard-data">EXP: {exp}</p>
  </div>);
}

export default Pokecard;