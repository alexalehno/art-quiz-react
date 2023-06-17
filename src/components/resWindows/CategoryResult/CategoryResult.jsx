import classes from './CategoryResult.module.scss';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuestion, resetCategoryInfo, addCategory, handleCategoryWindow } from '../../../store/gameSlice';


function CategoryResult({ result }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, category, rightNumInCategory } = useSelector(store => store.game);

  const handleClick = (isNext) => {
    let catNumber = '';

    if (isNext !== undefined) {
      if (isNext) {
        if (category === 12) {
         return handleClick();

        } else {
          catNumber = `/${category + 1}`; 
        }

      } else {
        catNumber = `/${category}`;
        dispatch(setCurrentQuestion({type, category}));
      }
    }

    if (rightNumInCategory) {
      dispatch(addCategory());
    }

    dispatch(resetCategoryInfo()); 
    dispatch(handleCategoryWindow({value: false}));
    navigate(`/categories/${type}${catNumber}`);
  } 

  return(
    <div className={classes.catResult}>
      <img className={classes.image} src={result.icon} alt="icon"/> 
      <p className={classes.title}>{result.title}</p>
      <p className={classes.subTitle}>{result.caption}</p>
   
      <div className={classes.buttonsWrap}>
        <Button 
          onClick={handleClick} 
          name={result.buttons[0]}  
          cls={[classes.resButton]} 
        />

        <Button 
          onClick={()=>handleClick(result.isNext)} 
          name={result.buttons[1]}  
          cls={[classes.resButton]} 
        />
      </div>
    </div>
  );
}

export default CategoryResult;