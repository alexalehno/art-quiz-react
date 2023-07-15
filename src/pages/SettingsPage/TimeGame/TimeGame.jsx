import classes from './TimeGame.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';


function TimeGame({ settings, setSettings }) {
  return(
    <div className={classes.timeGameBlock}>
      <ParamsTitle>Time game</ParamsTitle>
      
      <div className={classes.switcher}>
        <span>On</span>

        <label className={classes.switchLabel}>
          <input
            onChange={()=>setSettings({...settings, isTimeGame: !settings.isTimeGame})}
            checked={settings.isTimeGame}
            type="checkbox" 
            className={classes.switchInput} 
          />

          <span className={classes.switchSlider}></span>
        </label>
        
      </div>
    </div>  
  );
}

export default TimeGame;