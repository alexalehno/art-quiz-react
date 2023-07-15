import muteBtn from './icons/mute.svg';
import soundBtn from './icons/sound.svg';
import classes from './Volume.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';
import volumeLevelSound from '../../../assets/audio/volume_level.mp3';
import { soundPlayer } from '../../../funcs/funcs';


function Volume({ settings, setSettings }) {
  const setProgresColor = (val) => `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${val}%, #A4A4A4 ${val}%, #A4A4A4 100%)`;
  const setIconStyle = (volume) => [classes.icon, volume ? classes.active : ''].join(' ');
  
  const volumeChange = (e) => {
    setSettings({...settings, volume: Number(e.target.value)})
    soundPlayer(volumeLevelSound, settings.volume);
  }

  return(
    <div className={classes.volumeBlock}>
      <ParamsTitle>Volume</ParamsTitle>  
 
      <input 
        onChange={(e)=>volumeChange(e)}
        value={settings.volume}
        type="range"
        step='10'
        className={classes.inputProgress} 
        style={{background: setProgresColor(settings.volume)}}
      />

      <div className={classes.iconsWrap}>
        <img className={setIconStyle(!settings.volume)} src={muteBtn} alt="icon mute-button"/>
        <img className={setIconStyle(settings.volume)} src={soundBtn} alt="icon sound-button"/>
      </div>
    </div>
  );
}

export default Volume;