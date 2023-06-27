import classes from './QuestionPage.module.scss';
import Footer from '../../components/Footer/Footer';
import TimeIndicator from './TimeIndicator/TimeIndicator';
import ArtistQuestion from './ArtistQuestion/ArtistQuestion';
import PicturesQuestion from './PicturesQuestion/PicturesQuestion';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import ResultWindows from '../../components/resWindows/ResultWindows';
import { createOptions, highlight } from '../../funcs/funcs';
import { setTime, setOptions, setAnswer, addQuestion, handleQuestionWindow, handleQuitWindow } from '../../store/gameSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

function QuestionPage({data}) {
  const dispatch = useDispatch();
  const { 
    currentQuestion, 
    type, 
    options, 
    isAnswered, 
    isPassedCaterogy,
    settings, 
    timeout,
    isQuit,
  } = useSelector(store => store.game);
 
  const handleAnswer = useCallback((isRight) => {
    dispatch(setAnswer({isRight: isRight}));
    dispatch(addQuestion());
    dispatch(handleQuestionWindow({value: true}));
  }, [dispatch]);

  const checkAnswer = (number, e) => {
    if (currentQuestion === Number(number)) {
      handleAnswer(true);
      highlight(e.target,'rgb(61, 218, 105)');

    } else {
      handleAnswer(false);
      highlight(e.target, 'rgb(255, 126, 126)');
    }
  }

  useEffect(()=> {
    if (!timeout) {
      handleAnswer(false);
    }
  }, [handleAnswer, timeout]);

  useEffect(()=> {
    dispatch(setOptions({options: createOptions(data, currentQuestion)}));
    dispatch(setTime({timeout: settings.timeToAnswer}));
  }, [dispatch, data, currentQuestion, settings.timeToAnswer]);

  return (
    <div className='page'>
      <header className={classes.header}>
        <CloseBtn 
          onClick={()=>dispatch(handleQuitWindow({value: true}))} 
          cls={['hoverRotate']}
        />

        <TimeIndicator
          isTimeGame={settings.isTimeGame}
          timeToAnswer={settings.timeToAnswer}
          timeout={timeout}
          setTime={setTime}
          dispatch={dispatch}
          isAnswered={isAnswered}
          isPassedCaterogy={isPassedCaterogy}
          isQuit={isQuit}
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