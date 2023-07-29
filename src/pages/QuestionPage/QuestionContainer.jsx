import QuestionPage from './QuestionPage';
import { setCurrentQuestion, resetCompletedQuestions } from '../../store/gameSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetDataQuery } from '../../store/apiSlice';
import { getCurrentQuestion } from '../../funcs/funcs';

function QuestionContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, category } = useParams();
  const { status, error } = useGetDataQuery();
  
  useEffect(()=> {
    const categoryNum = Number(category);

    if (categoryNum < 1 || categoryNum > 12) {
      navigate(`/${type}/1`);
    }

    dispatch(resetCompletedQuestions());
    dispatch(setCurrentQuestion({ current: getCurrentQuestion(type, categoryNum) }));
  }, [dispatch, navigate, type, category]);

  return (
    <>
      {
        status === 'fulfilled' 
        ? <QuestionPage type={type}/>
        : <h1 className='error'>{ error && error.error }</h1>
      }
    </>
  ) 
}

export default QuestionContainer;