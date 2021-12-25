import classes from "./GameOver.module.css"

const GameOver = ({win}) => {
  return ( <div className={classes.GameOver}>
    {win? "You won": "Game Over"}
  </div> );
}
 
export default GameOver;