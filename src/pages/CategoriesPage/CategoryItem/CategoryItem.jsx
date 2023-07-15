import classes from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';


function CategoryItem({ image, to, category, catInfo }) {
  const catItemClasses = [classes.catItem, catInfo.length ? '' : classes.notPlayed].join(' ');
  const [right, total] = catInfo;

  return(
    <li className={catItemClasses}>
      <Link className={classes.catItem_link} to={to}>
        <div className={classes.catItem_header}>
          <h4 className={classes.catItem_title}>Category - {category}</h4>
          <div className={classes.catItem_score}>
            <span className={classes.catItem_num}>{right}</span>
            /
            <span className={classes.catItem_num}>{total}</span>
          </div>
        </div>
  
        <img className={classes.catItem_img} src={image} alt='category icon'/>
        <span className={classes.catItem_playAgain}>Play again</span>
      </Link>
    </li>
  );
}

export default CategoryItem;