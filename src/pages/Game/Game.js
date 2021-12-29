import { useEffect, useState } from "react";
import { cards } from "../../cards";
import Field from "../../components/Field/Field";
import GameOver from "../../components/GameOver/GameOver";
import Hand from "../../components/Hand/Hand";
import classes from "./Game.module.css"

const Game = () => {

  const [inGameCards, setInGameCards] = useState([]);
  const [inGameNewCards, setInGameNewCards] = useState([]);
  const [inGameEnemyCards, setInGameEnemyCards] = useState([]);
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

  useEffect(()=>{
    setInGameNewCards(inGameCards)
  }, [inGameNewCards, inGameCards])

  useEffect(()=>{
    let newEnemyCards = []
    newEnemyCards.push(cards[randomEnemyDigit1])
    newEnemyCards.push(cards[randomEnemyDigit2])
    newEnemyCards.push(cards[randomEnemyDigit3])
    newEnemyCards.push(cards[randomEnemyDigit4])

    setInGameEnemyCards(newEnemyCards)
  }, [randomEnemyDigit1, randomEnemyDigit2, randomEnemyDigit3, randomEnemyDigit4])
  let atackButton;



  function atack(enemy, allay) {
    let e1 = enemy[0];
    let e2 = enemy[1];
    let e3 = enemy[2];
    let e4 = enemy[3];

    let a1 = allay[0];
    let a2 = allay[1];
    let a3 = allay[2];
    let a4 = allay[3];

    if(e1.hp > 0){
      e1.hp -= a1.damage;
      console.log(e1);
    }
    else{
      setEnemyHP(enemyHP - a1.damage)
      console.log(enemyHP);
    }

    if(e2.hp > 0){
      e2.hp -= a2.damage;
      console.log(e2);
    }
    else{
      setEnemyHP(enemyHP - a2.damage)
      console.log(enemyHP);
    }

    if(e3.hp > 0){
      e3.hp -= a3.damage;
      console.log(e3);
    }
    else{
      setEnemyHP(enemyHP - a3.damage)
      console.log(enemyHP);
    }

    if(e4.hp > 0){
      e4.hp -= a4.damage;
      console.log(e4);
    }
    else{
      setEnemyHP(enemyHP - a4.damage)
      console.log(enemyHP);
    }

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
      atack( inGameEnemyCards, inGameCards)
    }}>Atack</div>
  }


  return (<>

    <div className={classes.Background}></div>
    {gameOver ? <GameOver win={win} />
    
      :
      <div className={classes.Game}>
        <Field data={inGameCards} enemyCards={enemy_cards} enemyHP={enemyHP}/>
        <Hand cd1={randomDigit1} cd2={randomDigit2} cd3={randomDigit3} cd4={randomDigit4} in_cards={inGameCards} put={setInGameCards} />
        {atackButton}
        
      </div>}

  </>);
}

export default Game;