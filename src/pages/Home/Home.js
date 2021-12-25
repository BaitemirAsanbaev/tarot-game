import { Link } from "react-router-dom";
import classes from "./Home.module.css"

const Home = () => {
  return (<div className={classes.Home}>
    <div className={classes.shadow}></div>
    <h1>Tarot Game</h1>
    <div className={classes.buttons}>
      <Link to="/menu">Play</Link>
      <Link to="/guide">Guide</Link>
      <a href="https://baitemir.gatsbyjs.io/">Author</a>
    </div>
  </div>);
}

export default Home;