import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

import "./ItemCount.css";

const ItemCount = ({ item, stock, addItem, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handlerCounterDown = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Fragment>
      <div className="counter">
        <Button icon size="mini" onClick={handlerCounterDown}>
          <Icon name="minus" size="mid" />
        </Button>
        <p className="counterText">{counter}</p>
        <Button icon size="mini" onClick={handlerCounterUp}>
          <Icon name="plus" size="mid" />
        </Button>
      </div>
      <div className="addToCartButton">
        <Button
          content="COMPRAR"
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
