import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cardList/CardList.comp.jsx";
import { SearchBox } from "./components/search/Search.comp";

class App extends Component {
  state = {
    monsters: [],
    searchfield: "",

    // this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // arrow func automatically binds the this keyword, while it would be explicitly binded in reg func
  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      monster.name.toLowerCase().includes(searchfield.toLowerCase());
      console.log(filteredMonsters);
    });
    return (
      <div className="App">
        {/* <CardList>
          {this.state.monsters.map(function (monster) {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </CardList>{" "} */}
        {/* <Card /> */}
        {/* <CardList monsters={this.state.monsters} /> */}
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={(e) => {
            e.preventDefault();
            this.setState({ searchfield: e.target.value }, () => {
              return this.state.searchfield;
            });
          }}
        /> */}
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={(e) => this.setState({ searchfield: e.target.value })}
        /> */}

        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          placeholder={"Search monster"}
          handleChange={this.handleChange}
        />

        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
