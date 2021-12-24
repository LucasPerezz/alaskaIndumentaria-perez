import React, { Fragment, useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";

import "./ItemCount.css";

const ItemCount = ({ item, stock, addItem, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handlerCounterDown = () => {
    if (counter != 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Fragment>
      <div className="counter my-5 align-items-center mx-5">
        <Button icon size="mini" color="black" onClick={handlerCounterDown}>
          <Icon name="minus" size="small" />
        </Button>
        <p>{counter}</p>
        <Button icon size="mini" color="black" onClick={handlerCounterUp}>
          <Icon name="plus" size="small" />
        </Button>
      </div>
      <div className="my-5">
        <Button
          content="Agregar al carrito"
          size="fluid"
          negative
          onClick={() => {
            addItem(item, counter);
            onAdd(true);
          }}
        />
      </div>
    </Fragment>
  );
};

export default ItemCount;
