import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "../../components/StorePresentation/StorePresentation.css";

const StorePresentation = () => {
  return (
    <Fragment>
      <Carousel className="container w-100 my-2">
        <Carousel.Item>
          <img
            className="d-block carouselSetup"
            src="https://i.ibb.co/XLt95nX/carousel1ai.jpg"
            alt="Alaska indumentaria"
          />
          <Carousel.Caption>
            <h3 className="fontSetUp">Alaska Indumentaria</h3>
            <p className="fontSetUpDesc">Empeza el año de la mejor forma</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselSetup"
            src="https://i.ibb.co/HxFdqDP/Whats-App-Image-2021-11-17-at-22-57-33.jpg"
            alt="Alaska indumentaria"
          />

          <Carousel.Caption>
            <h3 className="fontSetUp">Los mejores precios</h3>
            <p className="fontSetUpDesc">Pensados para no dañar tu bolsillo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselSetup"
            src="https://i.ibb.co/RPTj6sZ/Whats-App-Image-2021-11-17-at-22-57-26.jpg"
            alt="Alaska indumentaria"
          />

          <Carousel.Caption>
            <h3 className="fontSetUp">La mejor calidad y atencion</h3>
            <p className="fontSetUpDesc">Para dar el maximo confort a nuestros amados clientes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default StorePresentation;
