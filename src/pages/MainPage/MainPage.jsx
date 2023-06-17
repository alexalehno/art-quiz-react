import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';
import icon from  './image/logo-main.svg';
import Footer from '../../components/Footer/Footer';
import SettingBtn from '../../components/UI/SettingBtn/SettingBtn';


function MainPage() {
  const pageStyles = [styles.mainPage, 'page'].join(' ');
  const linkStyles  = [styles.mainButton, 'hoverBg'].join(' ');
  
  return (
    <div className= {pageStyles}>
      <SettingBtn 
        cls={[styles.settingBtnMargin, 'hoverRotate']}
        to='/settings'
      />

      <main className={styles.main}>
        <img className={styles.logo} src={icon} alt="logo-img"/>

        <div className={styles.buttonsWrap}>
          <Link className={linkStyles} to='/categories/artist'>
            Artist quiz
          </Link>

          <Link className={linkStyles} to='/categories/pictures'>
            Pictures quiz
          </Link>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default MainPage;
