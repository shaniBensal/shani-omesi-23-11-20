import { useState } from "react";
import "./App.scss";
import NavBar from "./components/header/header";
import MainRoutes from "./main-routes";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import reducer from "./store/reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, composedEnhancer);
const App = () => {
  const [theamState, updateTheamState] = useState(false);

  const toggleTheam = () => {
    updateTheamState((prevState) => !prevState);
  };

  return (
    <Provider store={store}>
      <Router>
        <div
          className={`App ${
            theamState ? "text-light bg-dark" : "text-body bg-light"
          }`}
        >
          <NavBar
            theamDark={theamState}
            toggleTheamEmmiter={toggleTheam}
          ></NavBar>
          <div className="container py-3">
            <MainRoutes></MainRoutes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
