import classes from './QuestionPage.module.scss';
import Footer from '../../components/Footer/Footer';
import ResultWindows from '../../components/resWindows/ResultWindows';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import TimeIndicator from './TimeIndicator/TimeIndicator';
import ArtistQuestion from './ArtistQuestion/ArtistQuestion';
import PicturesQuestion from './PicturesQuestion/PicturesQuestion';
import { createOptions, highlight } from '../../funcs/funcs';
import { addAnswer, handleQuestionWindow, handleQuitWindow } from '../../store/gameSlice';
import { useGetDataQuery } from '../../store/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';

function QuestionPage({ type }) {
  const dispatch = useDispatch();
  const { currentQuestion, isAnswered } = useSelector(store => store.game);
  const { settings } = useSelector(store => store.settings);
  const { numberOfOptions } = settings;
  const { data } = useGetDataQuery();
 
  const handleAnswer = useCallback((isRight) => {
    const answer = {
      ...data[currentQuestion],
      isRight,
    } 

    dispatch(addAnswer({ answer }));
    dispatch(handleQuestionWindow({ value: true }));

  }, [dispatch, data, currentQuestion]);


  const checkAnswer = (number, e) => {
    if (currentQuestion === Number(number)) {
      handleAnswer(true);
      highlight(e.target,'rgb(61, 218, 105)');

    } else {
      handleAnswer(false);
      highlight(e.target, 'rgb(255, 126, 126)');
    }
  }

  const options = useMemo(() => createOptions(
    data, currentQuestion, numberOfOptions), 
    [data, currentQuestion, numberOfOptions]
  );
      
  return (
    <div className='page'>
      <header className={classes.header}>
        <CloseBtn 
          onClick={()=>dispatch(handleQuitWindow({value: true}))} 
          cls={['hoverRotate']}
        />

        <TimeIndicator
          handleAnswer={handleAnswer}
          key={currentQuestion}
        />
      </header>

      <main className={classes.main}>
        {
          type === 'artist' 
          ? <ArtistQuestion 
              imageNum={data[currentQuestion].imageNum}
              options={options} 
              checkAnswer={checkAnswer}
              isAnswered={isAnswered}
            />

          : <PicturesQuestion 
              author={data[currentQuestion].author}
              options={options} 
              checkAnswer={checkAnswer}
              isAnswered={isAnswered}
            />
        }
      </main>

      <Footer />
      <ResultWindows />
    </div>
  );
}

export default QuestionPage;