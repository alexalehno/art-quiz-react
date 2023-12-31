import './styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import ScorePage from './pages/ScorePage/ScorePage.jsx';
import QuestionContainer from './pages/QuestionPage/QuestionContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/:type" element={<CategoriesPage />} />
          <Route path="/:type/score" element={<ScorePage />} />
          <Route path="/:type/:category" element={<QuestionContainer />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
