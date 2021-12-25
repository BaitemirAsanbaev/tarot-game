import classNames from "classnames";
import classes from "./Card.module.css"
import { useState } from 'react';
import NoCard from "./NoCard";
import back from "../../assets/images/back.svg"
const Card = ({type}) => {

  const [isShown, setIsShown] = useState(false);
  const [onTable, setOnTable] = useState(false);


  return (<div className={classes.CardDiv}>

    {onTable ? isShown ?
      <img onClick={() => setIsShown(false)} src={type} alt="opened" className={classNames(classes.Card, classes.opened)}/>
      :
      <img onClick={() => setIsShown(true)} src={back} alt="hidden" className={classNames(classes.Card, classes.hidden)}/>
      : <NoCard />
    }

    <div style={{ cursor: "pointer", backgroundColor: "#000", color: "#fff", margin: "10px", padding: "10px" }} onClick={() => setOnTable(!onTable)}>{onTable ? "Take" : "Put"}</div>
  </div>
  )
}

export default Card;