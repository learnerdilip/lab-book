import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import store from "./store";
import HomePage from "./components/HomePage";
import LoginContainer from "./components/user/LoginContainer";
import SignupContainer from "./components/user/SignupContainer";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
      </Switch>
    </Provider>
  );
}

export default App;
