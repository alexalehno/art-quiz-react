import classes from './ParamsTitle.module.scss';

function ParamsTitle({name}) {
  return <h3 className={classes.title}>{name}</h3>;
}

export default ParamsTitle;