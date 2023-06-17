import classes from './SettingsPage.module.scss';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import Footer from '../../components/Footer/Footer';
import Volume from './Volume/Volume';
import TimeGame from './TimeGame/TimeGame';
import TimeAnswer from './TimeAnswer/TimeAnswer';
import Button from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function SettingsPage() {
  const { pathname } = useSelector(store => store.game);
  const navigate = useNavigate();

  return(
    <div className='page'>
      <header className={classes.setHeader}>
        <h2 className={classes.setHeaderTitle}>Settings</h2>

        <CloseBtn onClick={()=>navigate(pathname)} cls={['hoverRotate']} />
      </header>
      
      <main className={classes.main}>
        <div className={classes.parametersWrap}>
          <Volume/>
          <TimeGame/>
          <TimeAnswer/>
        </div>

        <div className={classes.buttonsWrap}>
          <Button cls={[classes.setButton, 'hoverOpacity']} name='Default'/>
          <Button cls={[classes.setButton, 'hoverOpacity']} name='Save'/>
        </div>
      </main>  
      
      <Footer/>
    </div>
  );
}

export default SettingsPage;