/** Pokecard div of name, img, type, exp */
function Pokecard({ name, type, exp, id }) {

  const imgUrl =
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (<div className="Pokecard">
    <h1 className="Pokecard-name">{name}</h1>
    <img src={imgUrl} className="Pokecard-img"></img>
    <p className="Pokecard-type">Type: {type}</p>
    <p className="Pokecard-exp">EXP: {exp}</p>
  </div>);
}

export default Pokecard;