import classes from './QuestionResult.module.scss';
import Button from '../../../components/UI/Button/Button';
import iconRight from './icons/icon-right.svg';
import iconWrong from './icons/icon-wrong.svg';
import rightSound from '../../../assets/audio/right.mp3';
import wrondSound from '../../../assets/audio/wrong.mp3';
import { getImage, soundPlayer } from '../../../funcs/funcs';
import { nextQuestion, handleQuestionWindow, handleCategoryWindow } from '../../../store/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
 

function QuestionResult() {
  const dispatch = useDispatch();
  const { completedQuestions, lastQuestion } = useSelector(store => store.game);
  const { settings } = useSelector(store => store.settings);
  const { imageNum, name, author, year, isRight } = completedQuestions[completedQuestions.length-1];
  
  const next = () => {
    dispatch(handleQuestionWindow({value: false}));

    if (Number(imageNum) === lastQuestion ) {
      dispatch(handleCategoryWindow({value: true})) ;

    } else {
      dispatch(nextQuestion());
    }
  } 

  useEffect(()=> {
    soundPlayer(isRight ? rightSound : wrondSound, settings.volume);
  }, [isRight, settings.volume]);

  return(
    <div className={classes.questionResult}>
      <div className={classes.image} style={{ backgroundImage: getImage(imageNum) }}>
        <img 
          className={classes.indicator} 
          src={isRight ? iconRight : iconWrong} 
          alt="icon" 
        /> 
      </div> 

      <h4 className={classes.title}>{name}</h4>
      <span className={classes.author}>{author}</span>
      <span className={classes.year}>, {year}</span>

      <Button 
        onClick={next}
        cls={[classes.resButton, 'hoverOpacity']} 
        name='Next'
      />
    </div>
  );
}

export default QuestionResult;