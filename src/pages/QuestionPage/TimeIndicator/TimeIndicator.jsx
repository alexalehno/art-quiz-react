import classes from './TimeIndicator.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTimer } from '../../../hooks/useTimer';


function TimeIndicator({ handleAnswer }) {
  const progressStyle = (timeout, time) => `${100 - (timeout * 100) / time}%`;
  const { isAnswered, isPassedCaterogy, isQuit } = useSelector(store => store.game);
  const { settings } = useSelector(store => store.settings);
  const { timeToAnswer, isTimeGame } = settings;
  const timeout = useTimer(timeToAnswer, [isAnswered, isPassedCaterogy, isQuit], isTimeGame);

  useEffect(()=> {
    if (!timeout) {
      handleAnswer(false);
    }
  }, [handleAnswer, timeout])

  return (
    <div className={[classes.timeIndicator, settings.isTimeGame ? '' : 'opacity'].join(' ')}>
      <div className={classes.progress}>
        <div 
          style={{width: progressStyle(timeout, settings.timeToAnswer)}}
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