import { setPathname } from '../store/gameSlice';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export const usePathname = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setPathname({ pathname }));
  }, [dispatch, pathname]);
}