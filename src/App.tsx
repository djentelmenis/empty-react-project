import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';

import classes from './App.module.scss';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <p className={classes.test}>
      Page has been open for <code>{count}</code> seconds.
    </p>
  );
};

export default hot(App);
