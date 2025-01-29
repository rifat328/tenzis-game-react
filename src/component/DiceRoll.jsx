import React from "react";
import Die from "./Die";
import "../style/DiceRoll.css";
const DiceRoll = () => {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const reRoll = () => {
    setDice(generateAllNewDice);
  };
  const diceElements = dice.map((num) => <Die value={num} />);

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
