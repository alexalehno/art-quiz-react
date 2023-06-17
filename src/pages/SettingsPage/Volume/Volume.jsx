import muteBtn from './icons/mute.svg';
import soundBtn from './icons/sound.svg';
import classes from './Volume.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';

function Volume() {
  return(
    <div className={classes.volumeBlock}>
      <ParamsTitle name={'Volume'}/>

      <input className={classes.inputProgress} type="range"/>

      <div className={classes.iconsWrap}>
        <img className={classes.icon} src={muteBtn} alt="icon mute-button"/>
        <img className={classes.icon} src={soundBtn} alt="icon sound-button"/>
      </div>
  </div>
  );
}

export default Volume;