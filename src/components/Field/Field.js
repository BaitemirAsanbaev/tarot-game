import { cards } from "../../cards";
import classes from "./Field.module.css"

const Field = ({ data, enemyCards }) => {


  let card1;
  let card2;
  let card3;
  let card4;

  console.log();

  const e1 = <img className={classes.field_card} src={cards[enemyCards[0]].image} alt="e1" />
  const e2 = <img className={classes.field_card} src={cards[enemyCards[1]].image} alt="e2" />
  const e3 = <img className={classes.field_card} src={cards[enemyCards[2]].image} alt="e3" />
  const e4 = <img className={classes.field_card} src={cards[enemyCards[3]].image} alt="e4" />

  if (data.length >= 1) {
    card1 = <img className={classes.field_card} src={data[0].image} alt="1" />
  }
  if (data.length >= 2) {
    card2 = <img className={classes.field_card} src={data[1].image} alt="2" />
  }
  if (data.length >= 3) {
    card3 = <img className={classes.field_card} src={data[2].image} alt="3" />
  }
  if (data.length === 4) {
    card4 = <img className={classes.field_card} src={data[3].image} alt="4" />
  }

  return (<div className={classes.Field}>
    <div className={classes.enemyField}>
      <div></div>
      <div className={classes.enemyCards}>
        {e1}
        {e2}
        {e3}
        {e4}
      </div>
    </div>
    <div className={classes.allayField}>
      <div></div>
      <div className={classes.allayCards}>
        {card1}
        {card2}
        {card3}
        {card4}
      </div>
    </div>
  </div>);
}

export default Field;