import { useContext } from "react";
import "./Cartwidget.css";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito =
    "https://static.vecteezy.com/system/resources/previews/014/807/338/original/shopping-cart-line-icon-vector.jpg";
  return (
    <div>
      <Link to="/cart">
        <img
          className="imgCarrito"
          src={imgCarrito}
          alt="imagen de un carrito de compras"
        />
        {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;
