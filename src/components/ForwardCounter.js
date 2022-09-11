import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  const change = (x) => x + 1;

  const counter = useCounter(change);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
