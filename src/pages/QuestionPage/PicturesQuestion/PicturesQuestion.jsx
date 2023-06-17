import classes from './PicturesQuestion.module.scss';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionIndicator from '../QuestionIndicator/QuestionIndicator';
import { getImage } from '../../../funcs/funcs';


function PicturesQuestion({ options, author, check, isAnswered }) {
  const click = (imageNum, e) => {
    check(imageNum, e);
    e.currentTarget.style.filter='none';
  }

  return (
    <div className={classes.picturesQuestion}>
      <QuestionTitle>Which is - {<span style={{color: 'red'}}>{author}</span>} - picture?</QuestionTitle>
     
      <div className={[classes.options].join(' ') }>
        {
          options.map(item => 
            <div 
              className={[classes.optionWrap, 'hoverOpacity', isAnswered ? 'gray' : '' ].join(' ')} 
              onClick={(e)=>click(item.imageNum, e)} 
              style={{ backgroundImage: getImage(item.imageNum) }}
              key={item.imageNum}
            >
              <div className={classes.option} />  
            </div>
          )
        }
      </div>

      <QuestionIndicator number={10}/>
    </div>
  )
}

export default PicturesQuestion;