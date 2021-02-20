import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';

import G6 from '@antv/g6';

import Input from './components/Toggle/Toggle';

import classes from './App.module.scss';

console.log(G6);

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <>
      <p className={classes.test}>
        Page has been open for <code>{count}</code> seconds.
      </p>
      <Input initialValue />
    </>
  );
};

export default hot(App);
