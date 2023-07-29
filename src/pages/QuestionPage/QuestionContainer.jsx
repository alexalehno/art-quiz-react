import QuestionPage from './QuestionPage';
import { setCurrentQuestion } from '../../store/gameSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetDataQuery } from '../../store/apiSlice';

function QuestionContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, category } = useParams();
  const { status, error } = useGetDataQuery();

  useEffect(()=> {
    const cat = Number(category);

    if (cat < 1 || cat > 12) {
      navigate(`/${type}/1`);
    }

    dispatch(setCurrentQuestion({ type, category: cat }));
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