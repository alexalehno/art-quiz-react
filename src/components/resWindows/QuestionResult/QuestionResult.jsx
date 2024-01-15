import classes from './QuestionResult.module.scss';
import Button from '../../../components/UI/Button/Button';
import iconRight from './icons/icon-right.svg';
import iconWrong from './icons/icon-wrong.svg';
import rightSound from '../../../assets/audio/right.mp3';
import wrondSound from '../../../assets/audio/wrong.mp3';
import { getImage, soundPlayer, getLastQuestion } from '../../../funcs/funcs';
import { nextQuestion, handleQuestionWindow, handleCategoryWindow } from '../../../store/gameSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
 
function QuestionResult({ cls }) {
  const dispatch = useDispatch();
  const { type, category } = useParams();
  const { settings } = useSelector(store => store.settings);
  const { imageNum, name, author, year, isRight } = useSelector(store => store.game.completedQuestions.at(-1));
  
  const next = () => {
    dispatch(handleQuestionWindow({value: false}));

    if (Number(imageNum) === getLastQuestion(type, category)) {
      dispatch(handleCategoryWindow({value: true})) ;

    } else {
      dispatch(nextQuestion());
    }
  } 

  useEffect(()=> {
    soundPlayer(isRight ? rightSound : wrondSound, settings.volume);
  }, [isRight, settings.volume]);

  return(
    <div className={[classes.questionResult, cls].join(' ')}>
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