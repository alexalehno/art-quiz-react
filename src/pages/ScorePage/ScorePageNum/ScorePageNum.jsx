import classes from './ScorePageNum.module.scss';


function ScorePageNum({page, size, setPage}) {
  const decrease = () => {
    page -=1;

    if (page <= 0) {
      page = 0;
    }

    setPage(page);
  }

  const increase = () => {
    page +=1;

    if (page >= size-1) {
      page = size-1;
    }

    setPage(page);
  }

  return (
    <div className={classes.scorePageNumBlock}> 
      <button onClick={decrease} className={classes.button}/>

      <div className={classes.pageNumWrap}>
        <span className={classes.pageNum}>{size ? page + 1 : page}</span>
        / 
        <span className={classes.pageNum}>{size}</span>
      </div>

      <button onClick={increase} className={classes.button}/>
    </div>
  );
}

export default ScorePageNum;