import classes from './Overlay.module.scss';

function Overlay({children}) {
  return <div className={classes.overlay}>{children}</div>;
}

export default Overlay;