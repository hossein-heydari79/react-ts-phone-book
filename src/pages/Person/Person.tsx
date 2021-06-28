import React, { FC } from "react";
import { useParams } from "react-router-dom";
import "./Person.scss";

interface IUseParams {
  id: string;
}

interface IContactsData {
  name: string;
  des: string;
  profile: string;
}

interface IData {
  data: IContactsData[];
}

export const Person: FC<IData> = ({ data }) => {
  const { id } = useParams<IUseParams>();

  let item = data[+id - 1];

  return (
    <div className="favorite">
      <p className="title-favorite">Person</p>
      <div className="card-p">
        <div className="p-profile">{item.profile}</div>
        <div className="p-main">
          <p className="p-title">{item.name}</p>
          <p className="p-des">{item.des}</p>
        </div>
      </div>
    </div>
  );
};
