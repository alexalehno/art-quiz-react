import classes from './CategoriesPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryItem from './CategoryItem/CategoryItem';
import { importAll } from '../../funcs/funcs';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function CategoriesPage() {
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  const { passedCaterogies } = useSelector(store => store.game);
  const { type } = useParams();

  const getCatInfo = (cats, type, num) => {
    const result = cats
      .filter(cat => cat.type === type)
      .find(cat => cat.category === num)
    ;
      
    if (result) {
      return [result.right, result.total];
    } 

    return [];
  }

  return (
    <div className='page'>
      <Header />

      <main>
        <h2 className={classes.categoryTitle}>Categories - {type} quiz</h2>

        <ul className={classes.categoryList}> 
          { images.map((item, i) =>  
            <CategoryItem 
              catInfo={getCatInfo(passedCaterogies, type, i+1)}
              to ={`/categories/${type}/${i+1}`}
              src={item} 
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
