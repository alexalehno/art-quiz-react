import QuestionPage from './QuestionPage';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentQuestion } from '../../store/gameSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function QuestionContainer() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(store => store.game);
  const { type, category } = useParams();

  useEffect(()=> {
    dispatch(setCurrentQuestion({ type, category }));
  }, [dispatch, type, category]);

  return (
    <>
      {
        status === 'resolved' 
        ? <QuestionPage data={data} />
        : <h1 className='error'>{error}</h1>
      }
    </>
  ) 
}

export default QuestionContainer;