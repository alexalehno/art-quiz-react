import Overlay from '../UI/Overlay/Overlay';
import QuitGame from './QuitGame/QuitGame';
import QuestionResult from './QuestionResult/QuestionResult';
import CategoryResult from './CategoryResult/CategoryResult';
import { chooseCategoryResult } from './CategoryResult/categoryResultWindows';
import { useSelector } from 'react-redux';


function ResultWindows() {
  const { 
    data, 
    currentQuestion, 
    lastQuestion,
    isAnswered, 
    isPassedCaterogy, 
    isQuit,
    isRight, 
    rightNumInCategory, 
    totalNumInCategory,
    settings,
  } = useSelector(store => store.game);

  return (
    <>
      { isAnswered 
        ? <Overlay children={
            <QuestionResult 
              info={data[currentQuestion]} 
              currentQuestion={currentQuestion} 
              lastQuestion={lastQuestion} 
              isRight={isRight}
              volume={settings.volume}
            />}
          />
        : null 
      }

      { isPassedCaterogy 
        ? <Overlay children={
            <CategoryResult 
              result={chooseCategoryResult(rightNumInCategory, totalNumInCategory)}
              volume={settings.volume}
            />} 
          /> 
        : null 
      }

      { isQuit 
        ? <Overlay children={<QuitGame volume={settings.volume}/>}/> 
        : null 
      }
    </>
  )
}

export default ResultWindows;