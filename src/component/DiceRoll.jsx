import React from "react";
import Die from "./Die";
import "../style/DiceRoll.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
const DiceRoll = () => {
  const [dice, setDice] = React.useState(() => generateAllNewDice());
  const buttonRef = React.useRef(null);
  // dice.forEach(()=>{
  //   let num = 0;
  //   if(dice.isHeld === true){
  //     dice[num].value === dice[num +1].value;
  //     num =+1;
  //   }
  // })
  // if (
  //   dice.every((die) => die.isHeld) &&
  //   dice.every((die) => die.value === die[0].value)
  // ) {
  //   console.log("game Won");
  // }
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  React.useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

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
  const newGame = () => {
    setDice(generateAllNewDice());
  };
  return (
    <main>
      {gameWon ? <Confetti /> : null}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      <button
        ref={buttonRef}
        className="roll-dice"
        onClick={gameWon ? newGame : reRoll}
      >
        {gameWon ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
};

export default DiceRoll;
