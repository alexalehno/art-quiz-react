import classes from './QuitGame.module.scss';
import Button from '../../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { handleQuitWindow, resetCategoryInfo } from '../../../store/gameSlice';
import { useNavigate } from 'react-router-dom';


function QuitGame() {
  const { pathname } = useSelector(store => store.game);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quit = () => {
    navigate(pathname);
    dispatch(resetCategoryInfo());
    dispatch(handleQuitWindow({value: false}));
  }

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