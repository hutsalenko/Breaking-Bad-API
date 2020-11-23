import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./components/SearchInput";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import Home from "./components/Home";
import Episods from "./components/Episods";
import Error from "./components/Error";

import "./App.scss";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    person: [],
    episods: [],
    randomPerson: [],
    onePerson: {},
    searchFiled: "",
    isActive: null,
  };

  componentDidMount() {
    this.getPerson();
    this.getEpisods();
    this.getRandomPerson();
  }

  getPerson = () => {
    fetch(`https://www.breakingbadapi.com/api/characters`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ person: res });
      });
  };

  getEpisods = () => {
    fetch(`https://www.breakingbadapi.com/api/episodes`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ episods: res });
      });
  };

  getRandomPerson = () => {
    fetch(`https://www.breakingbadapi.com/api/character/random`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({ randomPerson: res });
      });
  };

  onChangeInput = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  onHandleCheck = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  addPersonToModal = (user) => {
    this.setState({ onePerson: user });
  };

  render() {
    const filterPerson = this.state.person.filter((persons) => {
      return persons.name.toLowerCase().includes(this.state.searchFiled.toLowerCase());
    });
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() =>
                this.state.randomPerson.length && (
                  <Home person={this.state.randomPerson} changePerson={this.getRandomPerson} />
                )
              }
            />
            <Route
              path="/characters"
              render={() => (
                <>
                  <Search search={this.onChangeInput} length={filterPerson.length} />
                  <ItemList
                    persons={filterPerson}
                    click={this.onHandleCheck}
                    choose={this.addPersonToModal}
                  />
                </>
              )}
            />

            <Route
              path="/episods"
              render={() =>
                this.state.episods.length && (
                  <Episods
                    episodInfo={this.state.episods}
                    check={this.handleCheck}
                    page={this.state.checkPage}
                  />
                )
              }
            />
            <Route component={Error} />
          </Switch>
          {this.state.isActive && <Modal check={this.onHandleCheck} userInfo={this.state.onePerson} />}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
