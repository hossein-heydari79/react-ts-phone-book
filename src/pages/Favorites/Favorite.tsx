import React, { FC } from "react";
import "./Favorite.scss";

import { FaTimesCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

interface IContactsData {
  name: string;
  des: string;
  profile: string;
}
interface IStar {
  star: IContactsData[];
  setstar: any;
}

export const Favorite: FC<IStar> = ({ star, setstar }) => {
  function remove(index: number) {
    let newStarData = [...star];
    newStarData.splice(index, 1);
    setstar(newStarData);
    toast.warn("Successfully removed!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="favorite">
      <p className="title-favorite">Favorites</p>
      <div className="card">
        {star.length != 0 ? (
          star.map((item, index) => (
            <div className="main-favorite">
              <div className="profile-favorite">{item.profile}</div>
              <div className="main-card-favorite">
                <p className="name-favorite">{item.name}</p>
                <p className="detail-favorite">{item.des}</p>
              </div>

              <div className="DE-favorite">
                <FaTimesCircle
                  size={16}
                  style={{ margin: "0.5rem", cursor: "pointer" }}
                  onClick={() => remove(index)}
                />
              </div>
            </div>
          ))
        ) : (
          <p
            style={{ fontSize: "2rem", marginTop: "2rem", fontWeight: "bold" }}
          >
            EMPTY
          </p>
        )}
      </div>
      <ToastContainer style={{ fontSize: "1.5rem" }} />
    </div>
  );
};
