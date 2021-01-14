// src/App.jsx
import React, { Component } from "react";
import Card from "./components/card";
import List from "./components/list";
import NewChickForm from "./components/newChickForm";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    chicken: [
      {
        race: "Harco",
        type: "pondeuse",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
      {
        race: "Cou nu",
        type: "chair",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
      {
        race: "Standard",
        type: "chair",
        imgUrl: "https://source.unsplash.com/random/150x150",
      },
    ],
    current: 0,
  };

  render() {
    let componentsToRender = <h2>No elements to render</h2>;

    if (this.state.chicken.length) {
      componentsToRender = (
        <React.Fragment>
          <List
            current={this.state.current}
            chicken={this.state.chicken}
            handleDelete={this.handleDeleteListItem}
          />
          <hr />
          <Navigation
            onChickChangeNext={this.handleChickChangeNext}
            onChickChangePrevious={this.handleChickChangePrevious}
          />
          <hr />
          <Card
            current={this.state.current}
            chick={this.state.chicken[this.state.current]}
            onChickChange={this.handleChickChange}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <NewChickForm onNewChick={this.handleNewChick} />
        <hr />
        {componentsToRender}
      </React.Fragment>
    );
  }

  handleNewChick = (chick) => {
    this.setState({ chicken: [...this.state.chicken, chick] });
  };

  handleDeleteListItem = (index) => {
    const chicken = this.state.chicken.filter((chick, key) => {
      return key !== index;
    });

    this.setState({ chicken: chicken });
  };

  handleChickChangeNext = () => {
    const current =
      this.state.current === this.state.chicken.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current: current });
  };

  handleChickChangePrevious = () => {
    const current =
      this.state.current === 0
        ? this.state.chicken.length - 1
        : this.state.current - 1;
    this.setState({ current: current });
  };
}

export default App;
