import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  function paginate(products, perPage, page) {
    const basePage = page * perPage;

    return page < 0 || perPage < 1 || basePage >= products.length
      ? []
      : products.slice(basePage, basePage + perPage);
  }

  return (
    <ul className="list-group">
      {paginate(props.products, 5, props.numPage).map((product, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            current={props.current}
            product={product}
          />
        );
      })}
    </ul>
  );
};

export default List;
