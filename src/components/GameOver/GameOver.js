import Button from "../Button/Button";
import classes from "./GameOver.module.css"

const GameOver = ({win}) => {
  return ( <div className={classes.GameOver}>
    {win? "You won": "Game Over"}
    
    <Button url="/menu">Back</Button>
  </div> );
}
 
export default GameOver;