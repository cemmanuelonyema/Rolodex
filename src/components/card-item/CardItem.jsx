import React from "react";
import "./cardItem.style.css";

export const CardItem = ({ monster }) => {
  return (
    <div className="card-item">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2> {monster.name}</h2>
      <p> {monster.email}</p>
    </div>
  );
};
