import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import burgerReducer from "./redux/reducer/burgerReducer";

const loggerMiddleware = store => {
  return next => {
    return action => {
       console.log("MyLoggerMiddleware: Dispatching ==> ", action);
       console.log("MyLoggerMiddleware: State before : ", store.getState());
       const result = next(action);
       console.log("MyLoggerMiddleware: State after : ", store.getState());
       return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerReducer, 
  composeEnhancers(applyMiddleware(loggerMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
