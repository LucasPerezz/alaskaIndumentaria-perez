import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

import "./ItemCount.css";

const ItemCount = ({ item, stock, addItem }) => {
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
      <div className="counter">
        <Button icon onClick={handlerCounterDown}>
          <Icon name="minus" />
        </Button>
        <p>{counter}</p>
        <Button icon onClick={handlerCounterUp}>
          <Icon name="plus" />
        </Button>
      </div>
      <div className="my-2">
        <Button content="Comprar" negative onClick={() => addItem(item, counter)} />
      </div>
    </Fragment>
  );
};

export default ItemCount;
