import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from "./components/logIn/LogIn"
import SignUp from "./components/signUp/SignUp"
import Main from "./components/main/Main"


import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/logIn">Log In</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route exact path="/">
              <Main />
            </Route>
            <Route  path="/signUp">
              <SignUp />
            </Route>
            <Route path="/logIn">
              <LogIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
