import classes from "../styles/Textinput.module.css";
export default function Textinput({ type, placeholder, icon, onChange, value }) {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} required onChange={onChange} value={value}/>
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
