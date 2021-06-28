import React from "react";
import "./App.scss";
import { Index } from "./pages";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  );
}

export default App;
