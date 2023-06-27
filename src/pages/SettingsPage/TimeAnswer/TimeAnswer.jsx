import classes from './TimeAnswer.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';
import { increase } from '../../../funcs/funcs';


function TimeAnswer({ settings, setSettings }) {
  return (
    <div className={[classes.timeAnswerBlock, settings.isTimeGame ? '' : 'opacity'].join(' ')}>
      <ParamsTitle name={'Time to answer'}/>

      <div className={classes.buttonWrap}>
        <button 
          onClick={
            ()=>setSettings({...settings, timeToAnswer: increase(settings.timeToAnswer, -5, 5, 30) })
          } 
          disabled={!settings.isTimeGame}
          className={classes.button}
        >&ndash;</button>
         
        <input 
          value={settings.timeToAnswer}
          className={classes.inputNum} 
          type="number" 
          readOnly 
        />
        
        <button 
          onClick={
            ()=>setSettings({...settings, timeToAnswer: increase(settings.timeToAnswer, 5, 5, 30) })
          } 
          disabled={!settings.isTimeGame}
          className={classes.button}
        >+</button>
      </div>  
    </div>  
  );
}

export default TimeAnswer;