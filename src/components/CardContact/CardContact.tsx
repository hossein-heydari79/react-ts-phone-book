import React, { FC } from "react";
import "./CardContact.scss";

import { FaUserEdit } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IContactsData {
  name: string;
  des: string;
  profile: string;
}

interface IDataCard {
  name: string;
  des: string;
  profile: string;
  index: number;
  data: IContactsData[];
  setdata: any;
  star: IContactsData[];
  setstar: any;
}

export const CardContact: FC<IDataCard> = ({
  name,
  des,
  profile,
  index,
  data,
  setdata,
  star,
  setstar,
}) => {
  function remove(index: number) {
    let newData = [...data];

    newData.splice(index, 1);

    setdata(newData);
  }

  function addStar(index: number) {
    let newStarData = [...star];
    let obj = {
      name: name || "",
      des: des || "",
      profile: profile || "",
    };
    newStarData.push(obj);
    setstar(newStarData);
  }

  function edit(index: number) {
    let item = data[index];

    let name = prompt("Enter Your Name", item.name);
    let des = prompt("Enter Your Description", item.des);
    let profile = prompt("Enter Your Profile", item.profile);

    let obj = {
      name: name || "",
      des: des || "",
      profile: profile || "",
    };

    let newData = [...data];
    newData.splice(index, 1, obj);
    setdata(newData);
  }

  return (
    <div className="main-contact">
      <div className="profile-contact">{profile}</div>
      <div className="main-card-contact">
        <p className="name-contact">{name}</p>
        <p className="detail-contact">{des}</p>
      </div>

      <div className="DE-contact">
        <FaTimesCircle
          onClick={() => {
            remove(index);
          }}
          size={16}
          style={{ margin: "0.5rem", cursor: "pointer" }}
        />
        <FaUserEdit
          onClick={() => edit(index)}
          size={16}
          style={{ margin: "0.5rem", cursor: "pointer" }}
        />
        <FaRegStar
          onClick={() => addStar(index)}
          size={16}
          style={{ margin: "0.5rem", cursor: "pointer" }}
        />
        <Link to={`/${index + 1}`}>
          <FaRegEye
            size={16}
            style={{ margin: "0.5rem", cursor: "pointer", color: "black" }}
          />
        </Link>
      </div>
    </div>
  );
};
