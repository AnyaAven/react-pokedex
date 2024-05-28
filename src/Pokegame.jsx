import { sampleSize } from "lodash";
import Pokedex from "./Pokedex.jsx";
import "./Pokegame.css"

const POKEMON = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

/** Pokegame div that has two pokedices
 *
 * The Pokedex with the most experience wins
 *
 * props:
 * pokemon: [{ id, name, type, base_experience },...]
 *
*/
function Pokegame({ pokemon = POKEMON }) {
  const halfDeck = Math.round(pokemon.length / 2);
  const playerOneHand = sampleSize(pokemon, halfDeck);
  const playerTwoHand = sampleSize(pokemon, halfDeck);

  const playerOneTotalExp = playerOneHand.reduce(
    (acc, p) => (acc += p.base_experience), 0);
  const playerTwoTotalExp = playerTwoHand.reduce(
    (acc, p) => (acc += p.base_experience), 0);

  return (<div className="Pokegame">
    <Pokedex pokemon={playerOneHand} />
    <Pokedex pokemon={playerTwoHand} />
    <div className="Pokegame-results">
      {playerOneTotalExp > playerTwoTotalExp
      ? "Player 1 wins!"
      : "Player 2 wins!"
    }
    </div>
  </div>);
}

export default Pokegame;
