import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';


function NavItem({name, to, src, cls}) {
  const styles = [classes.navLink, ...cls ? cls : ''].join(' ');
  const setActive = ({isActive}) => isActive ? [classes.navLink, classes.active].join(' ') : styles;

  return (
    <li>
      <NavLink className={setActive} to={to} end>
        <img className={classes.navIcon} src= {src} alt='icon'/>
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
