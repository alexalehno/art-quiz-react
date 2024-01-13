import classes from './NumberOfOptions.module.scss';
import ParamsTitle from '../ParamsTitle/ParamsTitle';
import { useGetDataQuery } from '../../../store/apiSlice';
import { getArrOfAuthors } from '../../../funcs/funcs';

function NumberOfOptions({ settings, setSettings }) {
  const { data } = useGetDataQuery();
 
  return(
    <div className={classes.numberOfOptionsBlock}>
      <ParamsTitle>Number of options</ParamsTitle>
      
      <select 
        value={settings.numberOfOptions}
        onChange={(e)=>setSettings({...settings, numberOfOptions: Number(e.target.value)})}
        className={classes.numberOfOptions}
      >
        {
          [...new Set(getArrOfAuthors(data))].map((_, i) => 
            <option 
              value={i+1}
              children={i+1}
              key={i}
            />
          )
        }
      </select>
    </div>  
  );
}

export default NumberOfOptions;