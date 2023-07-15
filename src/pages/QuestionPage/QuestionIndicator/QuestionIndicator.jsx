import classes from './QuestionIndicator.module.scss';
import { useSelector } from 'react-redux';


function QuestionIndicator() {
  const { completedQuestions } = useSelector(store => store.game);

  const itemStyle = (arr, i) => {
    if(arr[i] === undefined) {
      return '';
    }
  
    if (arr[i].isRight === true) {
      return classes.right;
    } 
  
    if (arr[i].isRight === false) {
      return classes.wrong;
    }
  }

  return (
    <div className={classes.questionIndicator}>
      {
        new Array(10).fill(null).map((_, i) => 
          <span 
            className={[classes.item, itemStyle(completedQuestions, i)].join(' ')} 
            key={i}
          /> 
        )
      }
    </div>
  );
}

export default QuestionIndicator;