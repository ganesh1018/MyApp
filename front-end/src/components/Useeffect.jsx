import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return <h2>Timer: {count}</h2>;
}
export default Timer;