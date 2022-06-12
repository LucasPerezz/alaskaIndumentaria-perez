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
            src="https://i.ibb.co/NVxJDjd/665f7d11-0837-44d5-89bf-902412637070-2.jpg"
            alt="Alaska indumentaria"
          />
          <Carousel.Caption>
            <h3 className="fontSetUp">Alaska Indumentaria</h3>
            <p className="fontSetUpDesc">Resguardate del frio de la mejor forma</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselSetup"
            src="https://i.ibb.co/SVMD8QC/ad8546dd-5488-42d3-a6b7-8ce86d6a73a8-1.jpg"
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
            src="https://i.ibb.co/zGPrd5B/uawdhaw221wad.jpg"
            alt="Alaska indumentaria"
          />

          <Carousel.Caption>
            <h3 className="fontSetUp">Calidad y atencion</h3>
            <p className="fontSetUpDesc">Para dar el maximo confort a nuestros amados clientes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default StorePresentation;
