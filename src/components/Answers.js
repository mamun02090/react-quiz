import Checkbox from "./Checkbox";
import classes from '../styles/Answers.module.css'
export default function Answers(){
    return(
        <Checkbox className={classes.answer} id="option1" label="A New Hope 1"/>
    )
}