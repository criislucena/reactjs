import { Link } from "react-router-dom";
import "./Item.css";
import Button from "react-bootstrap/Button";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio}</p>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <Link to={`/item/${id}`}>
        <Button variant="dark">Ver detalles</Button>
      </Link>
    </div>
  );
};

export default Item;
