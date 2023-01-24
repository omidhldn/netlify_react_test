import useCounter from './hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  //when useCounter execute all the code inside it will execute
  //if use multiple useCounter, every component will receive it's own state--it's the logic that is shared not the concrete state

  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
