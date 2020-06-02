import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store,persistStore} from "./store/store";
import Routes from './routes';
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistStore}>
               <Routes />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

