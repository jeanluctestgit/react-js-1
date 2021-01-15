import React from "react";

const ListItem = (props) => {
  const getListClasses = (index) => {
    const classes = "list-group-item";
    return props.current % 5 === index ? classes + " active" : classes;
  };

  return (
    <li className={getListClasses(props.index)}>
      <span>{props.product.productName} ({props.product.productCategory})</span>
    </li>
  );
};

export default ListItem;