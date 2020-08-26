import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import IndexScreen from "./screen/indexScreen";
import SearchScreen from "./screen/searchScreen";
import ShelfScreen from "./screen/shelfScreen";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/my-shelf" component={ShelfScreen} />
      </Switch>
    </Router>
  );
}
