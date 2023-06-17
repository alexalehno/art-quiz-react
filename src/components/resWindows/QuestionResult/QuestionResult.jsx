import classes from './QuestionResult.module.scss';
import Button from '../../../components/UI/Button/Button';
import iconRight from './icons/icon-right.svg';
import iconWrong from './icons/icon-wrong.svg';
import { getImage } from '../../../funcs/funcs';
import { useDispatch } from 'react-redux';
import { nextQuestion } from '../../../store/gameSlice';
import { getResultCategory, handleQuestionWindow, handleCategoryWindow } from '../../../store/gameSlice';


function QuestionResult({info, currentQuestion, lastQuestion, isRight} ) {
  const dispatch = useDispatch();
  const { imageNum, name, author, year } = info;
  const next = () => {
    dispatch(handleQuestionWindow({value: false}));

    if (currentQuestion !== lastQuestion) {
      dispatch(nextQuestion());

    } else {
      dispatch(getResultCategory());
      dispatch(handleCategoryWindow({value: true}));
    }
  } 

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