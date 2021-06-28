import React, { useState } from "react";
import { ContactsData } from "../../ContactsData";
import "./Contacts.scss";

import { CardContact } from "../../components";

export const Contacts = () => {
  const [data, setData] = useState(ContactsData);

  return (
    <div className="contact">
      <p className="title-contact">Contact</p>

      <div className="card">
        {data.length !== 0 ? (
          data.map((item) => (
            <CardContact
              name={item.name}
              des={item.des}
              profile={item.profile}
            />
          ))
        ) : (
          <p
            style={{ fontSize: "2rem", marginTop: "2rem", fontWeight: "bold" }}
          >
            EMPTY
          </p>
        )}
      </div>
    </div>
  );
};
