import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyle";
// import Root from "./redux/store/Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <Root>
  //     <App />
  //   </Root>
  // </React.StrictMode>
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);

reportWebVitals();
