import { useState, useEffect } from "react";
import Itemlist from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const misProductos = idCategoria
      ? query(collection(db, "Productos"), where("idCat", "==", idCategoria))
      : collection(db, "Productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("Proceso terminado");
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <>
      <h2> Mis Productos</h2>
      {loading ? <Loader /> : <Itemlist productos={productos} />}
    </>
  );
};

export default ItemListContainer;
