import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <p>
      Page has been open for <code>{count}</code> seconds.
    </p>
  );
};

export default App;
