import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},composeWithDevTools());

export default store