import React from "react";
import"./Cartwidget.css"
const CartWidget= () => {

    const imgCarrito="https://static.vecteezy.com/system/resources/previews/014/807/338/original/shopping-cart-line-icon-vector.jpg"
    return (
        <div>
            <img className="imgCarrito" src={imgCarrito} alt="imagen de un carrito de compras" />
        </div>
    )
}

export default CartWidget