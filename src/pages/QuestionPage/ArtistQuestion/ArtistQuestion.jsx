import classes from './ArtistQuestion.module.scss';
import Button from '../../../components/UI/Button/Button';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionIndicator from '../QuestionIndicator/QuestionIndicator';
import { getImage } from '../../../funcs/funcs';


function ArtistQuestion({ options, imageNum, check, isAnswered }) { 
  return (
    <div className={classes.artistQuestion}>
      <QuestionTitle>Who is the author of this picture?</QuestionTitle>

      <div 
        className={[classes.imageBlock, isAnswered ? 'gray' : ''].join(' ')} 
        style={{ backgroundImage: getImage(imageNum)}}
      >
        <QuestionIndicator />
      </div>
     
      <div className={classes.options}>
        {
          options.map(item => 
            <Button 
              onClick={check}
              value={item.imageNum}
              name={item.author} 
              cls={[classes.option, 'hoverBg']} 
              key={item.imageNum}
            />
          )
        }
      </div>
    </div>
  )
}

export default ArtistQuestion;