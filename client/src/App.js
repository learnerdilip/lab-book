import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router";
import store from "./store";
import HomePage from "./components/HomePage";
import LoginContainer from "./components/user/LoginContainer";
import SignupContainer from "./components/user/SignupContainer";
import Header from "./components/Header";
import NotesContainer from "./components/Notes/NotesContainer";
import ExperimentLogContainer from "./components/experimentLog/ExperimentLogContainer";
import ExperimentLogFormContainer from "./components/experimentLog/ExperimentLogFormContainer";
import PrevExperimentLog from "./components/experimentLog/PrevExperimentLog";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/notes" component={NotesContainer} />
        <Route
          exact
          path="/experimentcalender"
          component={ExperimentLogContainer}
        />
        <Route
          exact
          path="/logform/:date"
          component={ExperimentLogFormContainer}
        />
        <Route exact path="/log/:id" component={PrevExperimentLog} />
      </Switch>
    </Provider>
  );
}

export default App;
