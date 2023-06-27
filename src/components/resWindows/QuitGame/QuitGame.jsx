import classes from './QuitGame.module.scss';
import Button from '../../../components/UI/Button/Button';
import closeSound from '../../../assets/audio/close.mp3';
import { handleQuitWindow, resetCategoryInfo } from '../../../store/gameSlice';
import { soundPlayer } from '../../../funcs/funcs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function QuitGame({ volume }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useSelector(store => store.game);

  const quit = () => {
    navigate(pathname);
    dispatch(resetCategoryInfo());
    dispatch(handleQuitWindow({value: false}));
  }

  useEffect(()=> {
    soundPlayer(closeSound, volume);
  }, [volume]);

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