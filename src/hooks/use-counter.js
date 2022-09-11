import { useEffect, useState } from "react";
const useCounter = (change) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevState) => change(prevState));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return counter;
}
export default useCounter