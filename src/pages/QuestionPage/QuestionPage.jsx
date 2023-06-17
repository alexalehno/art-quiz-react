import classes from './QuestionPage.module.scss';
import Footer from '../../components/Footer/Footer';
import TimeIndicator from './TimeIndicator/TimeIndicator';
import ArtistQuestion from './ArtistQuestion/ArtistQuestion';
import PicturesQuestion from './PicturesQuestion/PicturesQuestion';
import CloseBtn from '../../components/UI/CloseBtn/CloseBtn';
import ResultWindows from '../../components/resWindows/ResultWindows';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createOptions } from '../../funcs/funcs';
import { setOptions, setAnswer, addQuestion, handleQuestionWindow, handleQuitWindow } from '../../store/gameSlice';
 

function QuestionPage({data}) {
  const {  currentQuestion, type, options, isAnswered } = useSelector(store => store.game);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setOptions({options: createOptions(data, currentQuestion)}));
  }, [dispatch, data, currentQuestion]);
  
  const check=(number, e)=>{
    let isRight = null;
    
    currentQuestion === Number(number) 
    ? answer(true, 'rgb(61, 218, 105)') 
    : answer(false, 'rgb(255, 126, 126)');

    dispatch(setAnswer({isRight}));
    dispatch(addQuestion());
    dispatch(handleQuestionWindow({value: true}));
         
    function answer(f, color) {
      isRight=f;
      e.target.style.backgroundColor=color;
    }
  };


  return (
    <div className='page'>
      <header className={classes.header}>
        <CloseBtn onClick={()=>dispatch(handleQuitWindow({value: true}))} cls={['hoverRotate']}/>
        <TimeIndicator/>
      </header>

      <main className={classes.main}>
        {
          type === 'artist' 
          ? <ArtistQuestion 
              imageNum={data[currentQuestion].imageNum}
              options={options} 
              check={check}
              isAnswered={isAnswered}
            />

          : <PicturesQuestion 
              author={data[currentQuestion].author}
              options={options} 
              check={check}
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