import { useState, useEffect } from "react";
    //default value
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      if(forwards){
        //setCounter(counterUpdateFn) => counterUpdateFn as parameter for the custom hook
        setCounter((prevCounter) => prevCounter + 1);
      }else{
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    //forward is dependency b/c: 1-it's not define inside useEffect-2-it's not define outside useCounter
    //we want to restart useCounter with new logic if it's change

  }, [forwards]);
  //custom hooks are just function so they can return sth
  return counter;
};

export default useCounter;