
import classes from "../styles/Video.module.css";

export default function Video({ id, title, noq }) {
  return (
    
      <div style={noq<=0? {pointerEvents: 'none'}: {pointerEvents: 'cursor'}} className={classes.video}>
        <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points: {noq * 5}</p>
        </div>
      </div>

  );
}
