import React, { useState } from "react";
import "./App.scss";
import { Contacts, Favorite, Person } from "./pages";
import { Switch, Route } from "react-router-dom";
import { ContactsData } from "./ContactsData";
import { FaUsers } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IContactsData {
  name: string;
  des: string;
  profile: string;
}

function App() {
  const [data, setData] = useState(ContactsData);

  const [star, setStar] = useState<IContactsData[]>([]);

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Contacts
              star={star}
              setstar={setStar}
              data={data}
              setdata={setData}
            />
          )}
        />
        <Route
          path="/favorites"
          render={() => <Favorite star={star} setstar={setStar} />}
        />
        <Route path="/:id" render={() => <Person data={data} />} />
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
