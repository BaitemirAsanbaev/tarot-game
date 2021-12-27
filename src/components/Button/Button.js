import { Link } from "react-router-dom";
import classes from "./Button.module.css"

const Button = ({children, url}) => {
  return ( <Link to={url} className={classes.Button}>{children}</Link> );
}
 
export default Button;