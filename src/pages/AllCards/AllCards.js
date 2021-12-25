import classes from "./AllCards.module.css"
import { cards } from '../../cards';
import Card from '../../components/Card/Card';

const AllCards = () => {

  const output = cards.map((item)=>{
    return (
      <Card type={item.image} id={item}/>
    )
  })
  return ( <div className={classes.AllCards}>
    {output}
  </div> );
}
 
export default AllCards;