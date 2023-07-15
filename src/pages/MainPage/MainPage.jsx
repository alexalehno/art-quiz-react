import styles from './MainPage.module.scss';
import icon from  './image/logo-main.svg';
import Footer from '../../components/Footer/Footer';
import SettingBtn from '../../components/UI/SettingBtn/SettingBtn';
import { Link } from 'react-router-dom';
import { usePathname } from '../../hooks/usePathname';


function MainPage() {
  const pageStyles = [styles.mainPage, 'page'].join(' ');
  const linkStyles = [styles.mainButton, 'hoverBg'].join(' ');

  usePathname();

  return (
    <div className={pageStyles}>
      <header className={styles.header}>
        <SettingBtn 
          cls={['hoverRotate']}
          to='/settings'
        />
      </header>
     
      <main className={styles.main}>
        <img className={styles.logo} src={icon} alt="logo-img"/>
        <div className={styles.buttonsWrap}>
          <Link className={linkStyles} to='/artist'>
            Artist quiz
          </Link>

          <Link className={linkStyles} to='/pictures'>
            Pictures quiz
          </Link>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default MainPage;