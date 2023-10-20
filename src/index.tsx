import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyle";
<<<<<<< HEAD
import Root from "./redux/store/Root";
=======
// import Root from "./redux/store/Root";
>>>>>>> e4ebcbf5c30015432c291fedb90c4ccf6d399a17

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
