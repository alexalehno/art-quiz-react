import classes from './TimeIndicator.module.scss';


function TimeIndicator() {
  return (
    <div className={classes.timeIndicator}>
      <div className={classes.progress}>
        <div className={classes.progressInner}></div>
      </div>
      <span className={classes.time}>0:00</span>
    </div>
  );
}

export default TimeIndicator;