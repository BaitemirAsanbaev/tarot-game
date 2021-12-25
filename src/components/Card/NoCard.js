import classNames from "classnames";
import classes from "./Card.module.css"

const NoCard = () => {
  return ( <div className={classNames(classes.Card, classes.NoCard)}>

  </div> );
}
 
export default NoCard;