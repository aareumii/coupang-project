import { createStore, combineReducers } from 'redux';
import productReducer from '../slice/productReducer';

const rootReducer = combineReducers({
  product: productReducer
  // 다른 리듀서 추가
});

const store = createStore(
  rootReducer,
  // Redux Devtools Extension 사용하는 경우
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
