
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link, Links } from "react-router-dom";
const NavBar = () => {
    return (
        <header>
            <Link to="/">
            <h1 className="logo">Tienda UFC</h1>
            </Link>
            
            <nav>
               <ul>
                 <li>
                <Link to="categoria/Protecciones"> Protecciones</Link>
                </li>
                <li>
                 <Link to="categoria/Ropa">Ropa</Link>
                 </li>
                 <li>
                 <Link to="categoria/Figuras de Peleadores">Figuras de Peleadores</Link>
                 </li>
                </ul> 
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar