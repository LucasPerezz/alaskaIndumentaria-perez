import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getFirestore } from "../services/getFirestore";
import ItemList from "../ItemList/ItemList";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { generoID } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const alaskaProducts = db.collection("Productos");

    if (!generoID) {
      alaskaProducts.get().then((querySnapshot) => {
        let content = [];
        querySnapshot.docs.map((doc) =>
          content.push({ id: doc.id, ...doc.data() })
        );
        setProductos(content);
        setLoading(false);
      });
    } else {
      let generoItems = alaskaProducts.where("genero", "==", generoID);
      generoItems.get().then((querySnapshot) => {
        let content = [];
        querySnapshot.docs.map((doc) =>
          content.push({ id: doc.id, ...doc.data() })
        );
        setProductos(content);
        setLoading(false);
      });
    }
  }, [generoID]);

  return (
    <div className="container my-5">
      <div className="itemListContainer">
        {loading ? <Loader active /> : <ItemList productos={productos} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
