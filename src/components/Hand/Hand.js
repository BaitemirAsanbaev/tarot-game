import { useState } from "react";
import { cards } from "../../cards";
import classes from "./Hand.module.css"

const Hand = ({cd1, cd2, cd3, cd4, in_cards, put }) => {


  const data = cards;

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  
  // console.log(cd1, cd2, cd3, cd4);

  const card1 =
    <img
      onClick={() => {
        let newList1 = [...in_cards]
        newList1.push(data[cd1]);
        put(newList1);
        setShow1(false)

      }}
      alt="1"
      className={classes.handCard}
      src={data[cd1].image} />

  const card2 =
    <img
      onClick={() => {
        let newList2 = [...in_cards]
        newList2.push(data[cd2]);
        put(newList2);
        setShow2(false)


      }}
      alt="2"
      className={classes.handCard}
      src={data[cd2].image} />

  const card3 =
    <img
      onClick={() => {
        let newList3 = [...in_cards]
        newList3.push(data[cd3]);
        put(newList3);
        setShow3(false)


      }}
      alt="3"
      className={classes.handCard}
      src={data[cd3].image} />

  const card4 =
    <img
      onClick={() => {
        let newList4 = [...in_cards]
        newList4.push(data[cd4]);
        put(newList4);
        setShow4(false)


      }}
      alt="4"
      className={classes.handCard}
      src={data[cd4].image} />


  return (<div className={classes.Hand}>
    {show1 ? card1 : null}
    {show2 ? card2 : null}
    {show3 ? card3 : null}
    {show4 ? card4 : null}
  </div>);
}

export default Hand;