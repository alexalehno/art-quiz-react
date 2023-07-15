import classes from './Button.module.scss';


function Button({name, value, onClick, cls, disabled}) {
  return (
    <button 
      onClick={(e)=>onClick(value, e)} 
      className={[classes.button, ...cls ? cls : ''].join(' ')} 
      disabled={disabled}
      children={name}
    />
  )
}

export default Button;