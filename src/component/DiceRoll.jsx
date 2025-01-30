import React from "react";
import Die from "./Die";
import "../style/DiceRoll.css";
import { nanoid } from "nanoid";
const DiceRoll = () => {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  console.log(dice);
  const reRoll = () => {
    // setDice(generateAllNewDice);
    setDice((dices) =>
      dices.map((dice) =>
        dice.isHeld === false
          ? { ...dice, value: Math.floor(Math.random() * 6) }
          : dice
      )
    );
  };

  const hold = (id) => {
    setDice(
      dice.map((dices) => {
        return dices.id === id ? { ...dices, isHeld: !dices.isHeld } : dices;
      })
    );
  };
  const diceElements = dice.map((dieObject) => (
    <Die
      key={dieObject.id}
      value={dieObject.value}
      isHeld={dieObject.isHeld}
      hold={hold}
      id={dieObject.id}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      {
        <button className="roll-dice" onClick={reRoll}>
          Roll Dice
        </button>
      }
    </main>
  );
};

export default DiceRoll;
