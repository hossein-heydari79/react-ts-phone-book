import React, { useState } from "react";
import "./App.scss";
import { Contacts, Favorite } from "./pages";
import { Switch, Route } from "react-router-dom";
import { ContactsData } from "./ContactsData";
import { FaUsers } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState(ContactsData);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Contacts data={data} setdata={setData} />}
        />
        <Route path="/favorites" render={() => <Favorite />} />
      </Switch>

      <div className="footer">
        <Link to="/">
          <FaUsers size={30} style={{ cursor: "pointer", color: "black" }} />
        </Link>
        <Link to="/favorites">
          <FaRegStar size={30} style={{ cursor: "pointer", color: "black" }} />
        </Link>
      </div>
    </div>
  );
}

export default App;
