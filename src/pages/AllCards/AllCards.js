import classes from "./AllCards.module.css"
import { cards } from '../../cards';

const AllCards = () => {
  const newCards = [...cards];
  newCards.shift();
  const output = newCards.map((item) => {
    return (
      <div key={item.title}>
        <img className={classes.guide_card} src={item.image} />
        <div className={classes.card_text}>
          <h2>{item.title.toUpperCase()}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    )
  })
  return (<div className={classes.AllCards}>
    <h1>Guide</h1>
    <div className={classes.cards_div}>
      {output}
    </div>
  </div>);
}

export default AllCards;