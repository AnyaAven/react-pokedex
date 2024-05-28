import { sampleSize } from "lodash";
import Pokedex from "./Pokedex.jsx";

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

/** Pokegame div that has two pokedices */
function Pokegame({ pokemon = POKEMON }) {
  const totalExp = pokemon.reduce((acc, p) => (acc += p.base_experience), 0);

  const halfDeck = Math.round(POKEMON.length / 2);
  const playerOneHand = sampleSize(POKEMON, halfDeck);
  const playerTwoHand = sampleSize(POKEMON, halfDeck);


  const playerOneTotalExp = playerOneHand.reduce(
    (acc, p) => (acc += p.base_experience), 0);
  const playerTwoTotalExp = playerTwoHand.reduce(
    (acc, p) => (acc += p.base_experience), 0);

  return (<div className="Pokegame">
    <Pokedex pokemon={playerOneHand} isWinner={playerOneTotalExp > playerTwoTotalExp} />
    <Pokedex pokemon={playerTwoHand} isWinner={playerTwoTotalExp > playerOneTotalExp} />
  </div>);
}

export default Pokegame;
