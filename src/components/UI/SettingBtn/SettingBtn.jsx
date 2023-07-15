import classes from './SettingBtn.module.scss';
import icon from './gear_btn.svg';
import { Link } from 'react-router-dom';


function SettingBtn({ to, cls }) {
  return (
    <Link 
      to={to} 
      className={[classes.button, ...cls ? cls : ''].join(' ')} 
      children={<img src={icon} alt='icon'/>}
    />
  );
}

export default SettingBtn;