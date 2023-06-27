import classes from './TimeIndicator.module.scss';
import { useEffect } from 'react';


function TimeIndicator({ dispatch, isTimeGame, timeToAnswer, timeout, setTime, isQuit, isAnswered, isPassedCaterogy }) {
  const progressStyle = (timeout) => `${100 - (timeout * 100) / timeToAnswer}%`;

  useEffect(()=> { 
    if(!isTimeGame) {
      return;
    }

    const timerID = setTimeout(() => dispatch(setTime({timeout: timeout-1})), 1000);

    if(!timeout || isQuit || isAnswered || isPassedCaterogy) {
      clearTimeout(timerID);
    }

    return () => clearTimeout(timerID); 
  }, [dispatch, setTime, isTimeGame, timeout, isQuit, isAnswered, isPassedCaterogy]);

  return (
    <div className={[classes.timeIndicator, isTimeGame ? '' : 'opacity'].join(' ')}>
      <div className={classes.progress}>
        <div 
          style={{width: progressStyle(timeout)}}
          className={classes.progressInner}
        />
      </div>

      <span className={classes.time}>
        0:{timeout.toString().padStart(2, '0')}
      </span>
    </div>
  );
}

export default TimeIndicator;