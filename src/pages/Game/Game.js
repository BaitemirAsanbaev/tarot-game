import { useEffect, useState } from "react";
import Field from "../../components/Field/Field";
import GameOver from "../../components/GameOver/GameOver";
import Hand from "../../components/Hand/Hand";
import classes from "./Game.module.css"

const Game = () => {

  const [inGameCards, setInGameCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [enemyHP, setEnemyHP] = useState(10);

  const [randomDigit1, setRandomDigit1] = useState(0);
  const [randomDigit2, setRandomDigit2] = useState(0);
  const [randomDigit3, setRandomDigit3] = useState(0);
  const [randomDigit4, setRandomDigit4] = useState(0);

  const [randomEnemyDigit1, setRandomEnemyDigit1] = useState(0);
  const [randomEnemyDigit2, setRandomEnemyDigit2] = useState(0);
  const [randomEnemyDigit3, setRandomEnemyDigit3] = useState(0);
  const [randomEnemyDigit4, setRandomEnemyDigit4] = useState(0);


  const enemy_cards = [randomEnemyDigit1, randomEnemyDigit2, randomEnemyDigit3, randomEnemyDigit4];


  useEffect(() => {
    setRandomDigit1( Math.round(Math.random() * 21 + 1));
    setRandomDigit2( Math.round(Math.random() * 21 + 1));
    setRandomDigit3( Math.round(Math.random() * 21 + 1));
    setRandomDigit4( Math.round(Math.random() * 21 + 1));

    setRandomEnemyDigit1( Math.round(Math.random() * 21 + 1));
    setRandomEnemyDigit2( Math.round(Math.random() * 21 + 1));
    setRandomEnemyDigit3( Math.round(Math.random() * 21 + 1));
    setRandomEnemyDigit4( Math.round(Math.random() * 21 + 1));
  },[])
  let atackButton;

  function atack() {
    let damage = 0;
    inGameCards.forEach((item) => {
      damage += item.damage;
    })
    console.log(enemyHP);
    setEnemyHP(enemyHP - damage);
  }
  useEffect(() => {

    console.log(enemyHP);
    if (enemyHP <= 0) {
      setWin(true)
      setGameOver(true)
      console.log(win, gameOver);
    }
  }, [enemyHP, win, gameOver])

  if (inGameCards.length === 4) {
    atackButton = <div className={classes.atack} onClick={() => {
      atack()
    }}>Atack</div>
  }

  return (<>

    <div className={classes.Background}></div>
    {gameOver ? <GameOver win={win} />
      :
      <div className={classes.Game}>
        <Field data={inGameCards} enemyCards={enemy_cards} />
        <Hand cd1={randomDigit1} cd2={randomDigit2} cd3={randomDigit3} cd4={randomDigit4} in_cards={inGameCards} put={setInGameCards} />
        {atackButton}
      </div>}

  </>);
}

export default Game;