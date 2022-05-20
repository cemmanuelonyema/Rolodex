import React from "react";
import { Card } from "../card/Card.comp";
import "./cardList.style.css";

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

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {" "}
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
