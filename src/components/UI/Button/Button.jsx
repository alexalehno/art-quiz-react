import classes from './Button.module.scss';


function Button({name, value, onClick, cls, disabled}) {
  const styles = [classes.button, ...cls ? cls : ''].join(' ');
 
  return (
    <button className={styles} onClick={(e)=>onClick(value, e)} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button;