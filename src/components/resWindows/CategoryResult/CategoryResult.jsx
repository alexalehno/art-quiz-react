import classes from './CategoryResult.module.scss';
import Button from '../../UI/Button/Button';
import categoryEndSound from '../../../assets/audio/category_end.mp3';
import { soundPlayer, getCurrentQuestion } from '../../../funcs/funcs';
import { chooseCategoryResult } from './categoryResultWindows';
import { setCurrentQuestion, resetCompletedQuestions, addCategory, handleCategoryWindow } from '../../../store/gameSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function CategoryResult({ cls }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, category } = useParams();
  const { completedQuestions, pathname } = useSelector(store => store.game);
  const { settings } = useSelector(store => store.settings);
  
  const rightAnswers = completedQuestions.filter(el => el.isRight).length;
  const totalAnswers = completedQuestions.length;
  const { icon, title, caption, buttons, isNext } = chooseCategoryResult(rightAnswers, totalAnswers);
  
  let categoryNum = Number(category);

  const handleClick = (isNext) => {
    let cat = '';

    if (isNext !== undefined) {
      if (isNext) {
        if (categoryNum === 12) {
         return handleClick();

        } else {
          cat = `/${categoryNum + 1}`; 
        }

      } else {
        cat = `/${categoryNum}`;
        dispatch(setCurrentQuestion({ current: getCurrentQuestion(type, categoryNum) }));
      }
    }

    if (rightAnswers) {
      const passedCat = {
        type,
        category: categoryNum,
        right: rightAnswers,
        total: totalAnswers,
        questions: [...completedQuestions],
      }

      dispatch(addCategory({ categoryObj: passedCat, category: categoryNum, type }));
    }

    dispatch(resetCompletedQuestions());
    dispatch(handleCategoryWindow({value: false}));
    navigate(`${pathname}${cat}`);
  } 

  useEffect(()=> {
    soundPlayer(categoryEndSound, settings.volume);
  }, [settings.volume]);

  return(
    <div className={[classes.catResult, cls].join(' ')}>
      <img className={classes.image} src={icon} alt="icon"/> 
      <p className={classes.title}>{title}</p>
      <p className={classes.subTitle}>{caption}</p>
   
      <div className={classes.buttonsWrap}>
        <Button 
          onClick={handleClick} 
          name={buttons[0]}  
          cls={[classes.resButton]} 
        />

        <Button 
          onClick={()=>handleClick(isNext)} 
          name={buttons[1]}  
          cls={[classes.resButton]} 
        />
      </div>
    </div>
  );
}

export default CategoryResult;