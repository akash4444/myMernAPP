import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact={true}>
              <Users />
            </Route>
            <Route path="/places/new" exact={true}>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
