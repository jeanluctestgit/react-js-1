// src/components/card.jsx
import React from "react";

const Card = (props) => {
  const { current, chick } = props;
  const { imgUrl, race, type } = chick;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{race}</h5>
        <p className="card-text">est une poule {type}</p>
        
      </div>
    </div>
  );
};

export default Card;
