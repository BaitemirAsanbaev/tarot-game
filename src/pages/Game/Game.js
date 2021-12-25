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




  let card_digit_1= randomDigit1;
  let card_digit_3= randomDigit2;
  let card_digit_2= randomDigit3;
  let card_digit_4= randomDigit4;

  useEffect(() => {
    setRandomDigit1( Math.round(Math.random() * 22));
    setRandomDigit2( Math.round(Math.random() * 22));
    setRandomDigit3( Math.round(Math.random() * 22));
    setRandomDigit4( Math.round(Math.random() * 22));
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
        <Field data={inGameCards} />
        <Hand cd1={card_digit_1} cd2={card_digit_2} cd3={card_digit_3} cd4={card_digit_4} in_cards={inGameCards} put={setInGameCards} />
        {atackButton}
      </div>}

  </>);
}

export default Game;