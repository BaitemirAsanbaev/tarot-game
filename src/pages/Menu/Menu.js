import { Link } from "react-router-dom";
import classes from "./Menu.module.css"

const Menu = () => {
  return ( <div className={classes.Menu}>
    <Link to="/battle">Battle</Link>
  </div> );
}
 
export default Menu;