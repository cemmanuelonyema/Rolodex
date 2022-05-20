import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/CardList.comp.jsx";

class App extends Component {
  state = {
    monsters: [
      //   { name: "rolodex-1", id: "1" },
      //   { name: "rolodex-2", id: "2" },
      //   { name: "rolodex-3", id: "3" },
      //   { name: "rolodex-4", id: "4" },
      //   { name: "rolodex-5", id: "5" },
    ],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        {/* <CardList>
          {this.state.monsters.map(function (monster) {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </CardList>{" "} */}
        <CardList monsters={this.state.monsters} />

        {/* <Card /> */}
        {/* <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default App;
