import classes from './CloseBtn.module.scss';
import icon from './close_btn.svg';


function CloseBtn({ onClick, cls }){
  return (
    <span 
      onClick={onClick} 
      className={[classes.button, ...cls ? cls : ''].join(' ')} 
      children={<img src={icon} alt='icon'/>}
    />
  );
}

export default CloseBtn;