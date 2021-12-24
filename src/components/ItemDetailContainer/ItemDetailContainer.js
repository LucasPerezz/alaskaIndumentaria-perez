import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loader } from "semantic-ui-react";
import { getFirestore } from "../services/getFirestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const alaskaProducts = db.collection("Productos");
    const firebaseProduct = alaskaProducts.doc(id);

    firebaseProduct
      .get()
      .then((doc) => {
        if (doc.exists) setItemDetail({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container d-flex justify-content-center my-5">
      {loading ? <Loader active /> : <ItemDetail item={itemDetail} />}
    </div>
  );
};
// }

export default ItemDetailContainer;
