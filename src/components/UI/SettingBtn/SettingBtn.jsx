import classes from './SettingBtn.module.scss';
import icon from './gear_btn.svg';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPathname } from '../../../store/gameSlice';
import { useEffect } from 'react';


function SettingBtn({ to, cls }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  
  useEffect(()=> {
    dispatch(setPathname({ pathname }));
  }, [dispatch, pathname]);
  
  return (
    <Link 
      className={[classes.button, ...cls ? cls : ''].join(' ')} 
      to={to} 
      children={<img src={icon} alt='icon'/>}
    />
  );
}

export default SettingBtn;