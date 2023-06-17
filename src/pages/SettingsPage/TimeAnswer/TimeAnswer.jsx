import classes from './TimeAnswer.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';


function TimeAnswer() {
  return (
    <div className={classes.timeAnswerBlock}>
      <ParamsTitle name={'Time to answer'}/>

      <div className={classes.buttonWrap}>
        <button className={classes.button}>&ndash;</button>
        <input className={classes.inputNum} type="number" readOnly value={0}/>
        <button className={classes.button}>+</button>
      </div>
  </div>  
  );
}

export default TimeAnswer;