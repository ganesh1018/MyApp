import { useEffect, useState } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔵 Mounted');

    const interval = setInterval(() => {
      console.log('⏱️ Interval running');
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('🔴 Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('🟢 Count updated:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
export default LifecycleExample;