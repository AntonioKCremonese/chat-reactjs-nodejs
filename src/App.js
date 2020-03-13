import React from 'react';
import Routes from './routes';
import GlobalStyle from './globalStyle';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
