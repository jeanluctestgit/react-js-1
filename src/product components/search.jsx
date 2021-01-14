import React, { Component } from "react";

export default class Search extends Component {

    state = {
        form: {
          productName :"",
        },
      };
  render() {
    return (
      <form onSubmit = { this.handleSearch }>
        <div className="input-group">
          <input
            name = "productName"
            type="text"
            className="form-control"
            value = {this.state.form.productName }
            placeholder="Search a product"
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search" >Search</i>
            </button>
          </div>
        </div>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { form } = this.state;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    form['productName'] = value;
    this.setState({ form });
  };

  handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    let product = {};

    for (var pair of formData.entries()) {
      product[pair[0]] = pair[1];
    }
    //console.log("Search : " , product.productName);
    this.props.onSearchProduct(product.productName);
  }
}
