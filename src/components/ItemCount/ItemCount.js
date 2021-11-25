import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";


import './ItemCount.css'

const ItemCount = ({stock}) => {
  const [counter, setCounter] = useState(1)


  const handlerCounterUp = () => {
    if(counter < stock) {

      setCounter (counter + 1)
    }
  }

  const handlerCounterDown = () => {
    if(counter != 1) {
      
      setCounter (counter - 1)
    }
  }


  return (
    <Fragment>
      <div className="counter">
      <Button icon onClick={handlerCounterDown}>
        <Icon name="minus"/>
      </Button>
        <p>{counter}</p>
      <Button icon  onClick={handlerCounterUp}>
        <Icon name="plus" />
      </Button>
      </div>
    </Fragment>
  );
};

export default ItemCount;
