import { useEffect, useState } from 'react';


export const useTimer = (time, arr, start) => {
  const [timeout, setTime] = useState(time);

  useEffect(() => {       
    if (!start) {
      return;
    }

    const timerID = setTimeout(() => setTime((pre)=>pre-1), 1000);
  
    if (!timeout || arr.some(el=>el)) {
      clearTimeout(timerID);
    }
  
    return () => clearTimeout(timerID);
  }, [timeout, arr, start]);

  return timeout; 
}
