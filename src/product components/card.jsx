import React from "react";

const Card = (props) => {
  const { current, product } = props;
  const { productImage, productName, productCategory , productPrice } = product;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">Categorie : {productCategory}</p>
        <p className="card-text">Prix : {Math.round(productPrice *100) / 100}</p>
        <button className="btn btn-primary" onClick = { props.onAddProduct }>Ajouter</button>
      </div>
    </div>
  );
};

export default Card;