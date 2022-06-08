import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Question({ question }) {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {question}
      </div><br/>
      <Answers/>
    </div>
  );
}
