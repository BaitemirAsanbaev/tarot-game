import classes from "./Field.module.css"

const Field = ({ data }) => {
  // console.log(data);
  let card1;
  let card2;
  let card3;
  let card4;

  // let card1_data;
  // let card2_data;
  // let card3_data;
  // let card4_data;

  // card2 = <img src={data[1].image} alt="2" />
  // card3 = <img src={data[2].image} alt="3" />
  // card4 = <img src={data[3].image} alt="4" />


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

  // if (data.length === 4) {
  //   card1_data = data[0]
  //   card2_data = data[1]
  //   card3_data = data[2]
  //   card4_data = data[3]
  // }


    return (<div>
      {card1}
      {card2}
      {card3}
      {card4}
    </div>);
  }

  export default Field;