import classes from './ScorePageNum.module.scss';
import { increase } from '../../../funcs/funcs';


function ScorePageNum({page, setPage, size }) {
  return (
    <div className={classes.scorePageNumBlock}> 
      <button onClick={()=>setPage(increase(page, -1, 0, size-1))} className={classes.button}/>

      <div className={classes.pageNumWrap}>
        <span className={classes.pageNum}>{size ? page + 1 : page}</span>
        / 
        <span className={classes.pageNum}>{size}</span>
      </div>

      <button onClick={()=>setPage(increase(page, 1, 0, size-1))} className={classes.button}/>
    </div>
  );
}

export default ScorePageNum;