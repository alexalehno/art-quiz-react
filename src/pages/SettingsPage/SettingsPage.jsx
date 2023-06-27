import classes from './SettingsPage.module.scss';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import Footer from '../../components/Footer/Footer';
import Volume from './Volume/Volume';
import TimeGame from './TimeGame/TimeGame';
import TimeAnswer from './TimeAnswer/TimeAnswer';
import Button from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveSettings } from '../../store/gameSlice';
import { useEffect, useState } from 'react';


function SettingsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname, settings, defaultSettings } = useSelector(store => store.game);
  const [ localSettings, setSettings ] = useState({ ...settings });
  const save = () => dispatch(saveSettings({...localSettings}));
  const setDefault = () => dispatch(saveSettings({...defaultSettings}));

  useEffect(()=> {
    setSettings({ ...settings });
  }, [settings])

  return(
    <div className='page'>
      <header className={classes.setHeader}>
        <h2 className={classes.setHeaderTitle}>Settings</h2>
     
        <CloseBtn 
          onClick={()=>navigate(pathname)} 
          cls={['hoverRotate']} 
        />
      </header>
      
      <main className={classes.main}>
        <div className={classes.parametersWrap}>
          <Volume 
            settings={localSettings}
            setSettings={setSettings}
          />

          <TimeGame 
            settings={localSettings}
            setSettings={setSettings}
          />

          <TimeAnswer 
            settings={localSettings}
            setSettings={setSettings}
          />
        </div>

        <div className={classes.buttonsWrap}>
          <Button cls={[classes.setButton, 'hoverOpacity']} onClick={setDefault} name='Default'/>
          <Button cls={[classes.setButton, 'hoverOpacity']} onClick={save} name='Save'/>
        </div>
      </main>  
      
      <Footer/>
    </div>
  );
}

export default SettingsPage;