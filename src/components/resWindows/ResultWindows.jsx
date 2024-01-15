import Overlay from '../UI/Overlay/Overlay';
import QuitGame from './QuitGame/QuitGame';
import QuestionResult from './QuestionResult/QuestionResult';
import CategoryResult from './CategoryResult/CategoryResult';
import { useSelector } from 'react-redux';


function ResultWindows() {
  const { isAnswered, isPassedCaterogy, isQuit } = useSelector(store => store.game);
    
  return (
    <>
      { isAnswered &&
        <Overlay children={<QuestionResult cls='centerView'/>}/>
      }

      { isPassedCaterogy &&
        <Overlay children={<CategoryResult cls='centerView'/>}/> 
      }

      { isQuit &&
        <Overlay children={<QuitGame cls='centerView'/>}/> 
      }
    </>
  )
}

export default ResultWindows;