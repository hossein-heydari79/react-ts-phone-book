import React, { FC } from "react";
import "./CardContact.scss";

import { FaUserEdit } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

interface IDataCard {
  name: string;
  des: string;
  profile: string;
}

export const CardContact: FC<IDataCard> = ({ name, des, profile }) => {
  return (
    <div className="main-contact">
      <div className="profile-contact">{profile}</div>
      <div className="main-card-contact">
        <p className="name-contact">{name}</p>
        <p className="detail-contact">{des}</p>
      </div>

      <div className="DE-contact">
        <FaTimesCircle
          size={16}
          style={{ margin: "0.5rem", cursor: "pointer" }}
        />
        <FaUserEdit size={16} style={{ margin: "0.5rem", cursor: "pointer" }} />
      </div>
    </div>
  );
};
