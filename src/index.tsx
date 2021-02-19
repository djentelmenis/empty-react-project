import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// if (module.hot) {
//   console.log('✅  Server-side HMR Enabled!');

//   module.hot.accept('./server', () => {
//     console.log('🔁  HMR Reloading `./server`...');
//     server.removeListener('request', currentApp);
//     const newApp = require('./server').default;
//     server.on('request', newApp);
//     currentApp = newApp;
//   });
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  module.hot.accept('./App', () => {
    console.log('🔁  HMR Reloading `./server`...');

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
}
