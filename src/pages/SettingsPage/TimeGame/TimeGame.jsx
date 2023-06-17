import classes from './TimeGame.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';


function TimeGame() {
  return(
    <div className={classes.timeGameBlock}>
      <ParamsTitle name={'Time game'}/>

      <div className={classes.switcher}>
        <span>On</span>

        <label className={classes.switchLabel}>
          <input className={classes.switchInput} type="checkbox"/>
          <span className={classes.switchSlider}></span>
        </label>
    </div>
  </div>  
  );
}

export default TimeGame;