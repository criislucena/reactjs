import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { toast } from "react-toastify";


const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    toast.success("Su compra fue agragada al carrito", {
      autoClose: 1000,
      theme: "light",
      position: "top-right",
    });
  };

  return (
    <div className="contenedorItem">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra </Link>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
