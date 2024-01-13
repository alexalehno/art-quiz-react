import classes from './SettingsPage.module.scss';
import Button from '../../components/UI/Button/Button';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import Footer from '../../components/Footer/Footer';
import Volume from './Volume/Volume';
import TimeGame from './TimeGame/TimeGame';
import TimeAnswer from './TimeAnswer/TimeAnswer';
import NumberOfOptions from './NumberOfOptions/NumberOfOptions';
import { saveSettings } from '../../store/settingsSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function SettingsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useSelector(store => store.game);
  const { settings, defaultSettings } = useSelector(store => store.settings);
  const [ localSettings, setSettings ] = useState({ ...settings });

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
          <NumberOfOptions
            settings={localSettings}
            setSettings={setSettings}
          /> 

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
          <Button 
            cls={[classes.setButton, 'hoverOpacity']} 
            onClick={() => setSettings({...defaultSettings})} 
            name='Default'
          />

          <Button 
            cls={[classes.setButton, 'hoverOpacity']} 
            onClick={() => dispatch(saveSettings({...localSettings}))} 
            name='Save'
          />
        </div>
      </main>  
      
      <Footer/>
    </div>
  );
}

export default SettingsPage;