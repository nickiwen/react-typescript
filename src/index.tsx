import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './index.css';

import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);