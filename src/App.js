import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import ScorePage from './pages/ScorePage/ScorePage.jsx';
import QuestionContainer from './pages/QuestionPage/QuestionContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './store/gameSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/categories/:type" element={<CategoriesPage />} />
          <Route path="/categories/:type/score" element={<ScorePage />} />
          <Route path="/categories/:type/:category" element={<QuestionContainer />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
