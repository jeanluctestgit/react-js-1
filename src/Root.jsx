import React, { Component } from "react";
import { products } from "./data/products";
import Card from "./product components/card";
import List from "./product components/list";
import Navigation from "./product components/navigation";
import Panier from "./product components/panier";
import Search from "./product components/search";

class Root extends Component {
  state = {
    products: products,
    current: 0,
    numPage: 0,
    numItem : 0,
    total : 0
  };
  render() {
    return (
      <div className="container" style = {{ width : '20rem'}}>
        <Search onSearchProduct = { this.handleSearchProduct }/>
        <hr />
        <Panier numItem = { this.state.numItem } total = { this.state.total }/>
        <hr />
        <List
          numPage={this.state.numPage}
          current={this.state.current}
          products={this.state.products}
        />
        <hr />
        <Navigation
          onProductChangeNext={this.handleProductChangeNext}
          onProductChangePrevious={this.handleProductChangePrevious}
        />
        <hr />
        <Card
          current={this.state.current}
          product={this.state.products[this.state.current]}
          onAddProduct = { this.handleAddProduct }
        />
      </div>
    );
  }

  handleSearchProduct = (product) => {
    
    const current = this.state.products.findIndex( p => p.productName === product);
    const numPage = Math.floor(current / 5);
    this.setState({ current: current, numPage: numPage });
  }

  handleProductChangeNext = () => {
    const current =
      this.state.current === this.state.products.length - 1
        ? 0
        : this.state.current + 1;

    const numPage = Math.floor(current / 5);
    this.setState({ current: current, numPage: numPage });
  };

  handleProductChangePrevious = () => {
    const current =
      this.state.current === 0
        ? this.state.products.length - 1
        : this.state.current - 1;
    const numPage = Math.floor(current / 5);
    this.setState({ current: current, numPage: numPage });
  };

  handleAddProduct = () => {  
    const numItem = this.state.numItem + 1;

    const total = Math.round((this.state.total + this.state.products[this.state.current].productPrice) * 100) /100;

    this.setState({numItem : numItem , total : total});
  }
}

export default Root;
