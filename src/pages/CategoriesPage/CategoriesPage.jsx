import classes from './CategoriesPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryItem from './CategoryItem/CategoryItem';
import { importAll } from '../../funcs/funcs';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usePathname } from '../../hooks/usePathname';
import { selectCaterogiesByType } from '../../store/gameSlice';

function CategoriesPage() {
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  const { type } = useParams();
  const caterogies = useSelector(state => selectCaterogiesByType(state, type));
  
  usePathname();

  const getCatInfo = (arr, num) => {
    const cat = arr.find(cat => cat.category === num);

    if (cat) {
      return [cat.right, cat.total]
    }
     
    return []
  }

  return (
    <div className='page'>
      <Header />

      <main>
        <h2 className={classes.categoryTitle}>Categories - {type} quiz</h2>

        <ul className={classes.categoryList}> 
          { images.map((item, i) =>  
            <CategoryItem 
              catInfo={getCatInfo(caterogies, i+1)}
              to={`/${type}/${i+1}`}
              image={item} 
              category={i+1}
              key={i}
            />
          )}
        </ul>
      </main>
   
      <Footer/>
    </div>
  )
}

export default CategoriesPage;
