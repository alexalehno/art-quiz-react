import classes from './Header.module.scss';
import headerLogo from './header_logo.svg';
import SettingBtn from '../UI/SettingBtn/SettingBtn';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className={classes.header}>
      <Link to= '/'>
        <img src={headerLogo} alt='logo'/>
      </Link>

      <Nav />

      <SettingBtn
        cls={['hoverRotate']}
        to='/settings'
      />
    </header>
  )
}

export default Header;