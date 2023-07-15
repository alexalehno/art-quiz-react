import classes from './QuitGame.module.scss';
import Button from '../../../components/UI/Button/Button';
import closeSound from '../../../assets/audio/close.mp3';
import { handleQuitWindow, resetCompletedQuestions } from '../../../store/gameSlice';
import { soundPlayer } from '../../../funcs/funcs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function QuitGame() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useSelector(store => store.game);
  const { settings } = useSelector(store => store.settings);

  const quit = () => {
    navigate(pathname);
    dispatch(resetCompletedQuestions());
    dispatch(handleQuitWindow({value: false}));
  }

  useEffect(()=> {
    soundPlayer(closeSound, settings.volume);
  }, [settings.volume]);

  return(
    <div className= {classes.quitGame}>
      <p className={classes.title}>Do you really want to quit the game?</p>

      <div className={classes.buttonWrap}>
        <Button 
          onClick={()=>dispatch(handleQuitWindow({value: false}))} 
          name='Cancel'
          cls={[classes.quitButton]} 
        />

        <Button 
          onClick={quit} 
          name='Yes'
          cls={[classes.quitButton]} 
        />
      </div>
    </div>
  );
}

export default QuitGame;