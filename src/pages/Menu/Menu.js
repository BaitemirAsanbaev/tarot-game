
import Button from "../../components/Button/Button";
import classes from "./Menu.module.css"

const Menu = () => {
  return ( <div className={classes.Menu}>
    <Button url="/battle">Battle</Button>
    <Button url="/">Back</Button>
  </div> );
}
 
export default Menu;