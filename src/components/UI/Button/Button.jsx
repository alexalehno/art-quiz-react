import classes from './Button.module.scss';


function Button({name, value, onClick, cls}) {
  const styles = [classes.button, ...cls ? cls : ''].join(' ');
 
  return (
    <button className={styles} onClick={(e)=>onClick(value, e)}>
      {name}
    </button>
  )
}

export default Button;