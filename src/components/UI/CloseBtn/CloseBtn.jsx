import classes from './CloseBtn.module.scss';
import icon from './close_btn.svg';


function CloseBtn({ onClick, cls }){
  const styles = [classes.button, ...cls ? cls : ''].join(' ');

  return (
    <span className={styles} onClick={onClick}>
      <img src={icon} alt='icon'/>
    </span>
  );
}

export default CloseBtn;