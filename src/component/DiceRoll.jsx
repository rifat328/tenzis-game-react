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
    setDice(generateAllNewDice);
  };

  const hold = (id) => {
    setDice(
      dice.map((dices) => {
        dices.id === id ? { ...dices, isHeld: true } : { ...dices };
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
