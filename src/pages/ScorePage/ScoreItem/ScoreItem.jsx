import classes from './ScoreItem.module.scss';
import { getImage } from '../../../funcs/funcs';
import { useState } from 'react';


function ScoreItem({category, item}) {
  const [isShow, setIsShow] = useState(false);
  const { imageNum, name, author, year, isRight } = item;

  const styles = [classes.scoreItem, isRight ? '' : 'gray'].join(' ');
  const stylesContent = [classes.itemContent, isShow ? classes.show : ''].join(' ');


  return (
    <li onClick={()=>setIsShow((pre)=> !pre)} className={styles}>
      <h4 className={classes.itemTitle}>Cat-{category}</h4>
      <div className={classes.itemBackground} style={{ backgroundImage: getImage(imageNum)}}>
        <div className={stylesContent}>
          <span className={classes.itemName}>{name}</span>
          <div>
            <span className={classes.itemArtist}>{author}</span>,
            <span className={classes.itemYear}>{year}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ScoreItem;