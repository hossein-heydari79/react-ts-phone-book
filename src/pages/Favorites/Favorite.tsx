import React from "react";
import "./Favorite.scss";

import { FaTimesCircle } from "react-icons/fa";

export const Favorite = () => {
  return (
    <div className="favorite">
      <p className="title-favorite">Favorites</p>
      <div className="card">
        <div className="main-favorite">
          <div className="profile-favorite">profile</div>
          <div className="main-card-favorite">
            <p className="name-favorite">name</p>
            <p className="detail-favorite">des</p>
          </div>

          <div className="DE-favorite">
            <FaTimesCircle
              size={16}
              style={{ margin: "0.5rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
