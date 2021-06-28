import React from "react";
import "./App.scss";
import { Contacts } from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
