import React from "react";
import { Cards } from "../card-item/CardItem";
import "./cards.style.css";

// const CardList = (props) => {
//   console.log(props);
//   return <div className="card-list">{props.children}</div>;
// };

// const CardList = (props) => {
//   console.log(props);
//   return (
//     <div className="card-list">
//       {" "}
//       {props.monsters.map(function (monster) {
//         return <h1 key={monster.id}>{monster.name}</h1>;
//       })}
//     </div>
//   );
// };

// const CardList = (props) => {
//   console.log(props);
//   return (
//     <div className="card-list">
//       {" "}
//       {props.monsters.map((monster) => (
//         <h1 key={monster.id}>{monster.name}</h1>
//       ))}
//     </div>
//   );
// };
//destructured monsters out of props being passed down
const Cards = ({ monsters }) => {
  return (
    <div className="cards">
      {" "}
      {monsters.map((monster) => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cards;
