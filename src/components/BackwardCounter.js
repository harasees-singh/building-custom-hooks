import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter((x) => x - 1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
