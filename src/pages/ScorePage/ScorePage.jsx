import classes from './ScorePage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScorePageNum from './ScorePageNum/ScorePageNum';
import ScoreItem from './ScoreItem/ScoreItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { usePathname } from '../../hooks/usePathname';
import { selectCaterogiesByType } from '../../store/gameSlice';

function ScorePage() {
  const { type } = useParams();
  const [ page, setPage ] = useState(0);
  const caterogies = useSelector(state => selectCaterogiesByType(state, type));

  usePathname();
  
  return (
    <div className="page">
      <Header/>  

      <main  className={classes.main}>
        <h2 className={classes.pageTitle}>{type} quiz</h2>

        <div className={classes.scoreContent}>
          {
            caterogies.length 
            ? <ul className={classes.scoreList}>
              { 
                caterogies[page].questions.map(item => 
                  <ScoreItem
                    category={caterogies[page].category} 
                    item={item} 
                    key={item.imageNum}
                  />
                )
              }
              </ul>

            : <p className={classes.scoreSubTitle}>Score Page</p>
          }
        </div>

        <ScorePageNum 
          setPage={setPage}
          page={page} 
          size={caterogies.length}
        />
      </main>

      <Footer/>
    </div>
  );
}

export default ScorePage;