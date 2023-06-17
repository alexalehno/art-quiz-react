import classes from './SettingBtn.module.scss';
import icon from './gear_btn.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPathname } from '../../../store/gameSlice';


function SettingBtn({ to, cls }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const styles = [classes.button, ...cls ? cls : ''].join(' ');

  return (
    <Link 
      className={styles} 
      to={to} 
      onClick={()=>dispatch(setPathname({ pathname }))}
    >
      <img src={icon} alt='icon'/>
    </Link>
  );
}

export default SettingBtn;