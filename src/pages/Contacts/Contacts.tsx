import React, { useState, FC } from "react";
import "./Contacts.scss";
import { Link } from "react-router-dom";

import { CardContact } from "../../components";
import { FaRegPlusSquare } from "react-icons/fa";

interface IContactsData {
  name: string;
  des: string;
  profile: string;
}

interface IContacs {
  data: IContactsData[];
  setdata: any;
  star: IContactsData[];
  setstar: any;
}

export const Contacts: FC<IContacs> = ({ data, setdata, star, setstar }) => {
  function addcontact() {
    let name = prompt("Enter your name");
    let des = prompt("Enter your description");
    let profile = prompt("Enter your profile");

    let obj = {
      name: name || "",
      des: des || "",
      profile: profile || "",
    };

    let newData = [...data];
    newData.push(obj);

    setdata(newData);
  }

  return (
    <div className="contact">
      <p className="title-contact">Contacts</p>

      <div className="card">
        {data.length !== 0 ? (
          data.map((item, index) => (
            <CardContact
              name={item.name}
              des={item.des}
              profile={item.profile}
              index={index}
              data={data}
              setdata={setdata}
              star={star}
              setstar={setstar}
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

      <FaRegPlusSquare
        style={{ backgroundColor: "white" }}
        onClick={addcontact}
        size={40}
        className="addContact"
      />
    </div>
  );
};
