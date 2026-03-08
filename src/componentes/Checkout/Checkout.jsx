import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completar todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del Email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map(prod => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch(err => {
        console.error("Error al crear la orden:", err);
        setError("Se produjo un error al crear la orden");
      });
  };

  // 👇 Todo el JSX va dentro de este return
  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map(prod => (
          <div key={prod.item.id}>
            <p>{prod.item.nombre} x {prod.cantidad}</p>
            <p>${prod.item.precio}</p>
            <hr />
          </div>
        ))}
        <div>
          <label>Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Confirmar Email</label>
          <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Confirmar Compra</button>
      </form>
      {ordenId && <strong>Gracias por tu compra! Tu número de orden es: {ordenId}</strong>}
    </div>
  );
};

export default Checkout;

