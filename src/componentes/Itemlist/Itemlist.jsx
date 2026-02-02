
import Item from "../Item/Item";
import "./Itemlist.css"

const Itemlist = ({productos}) => {
  return (
    <div className="contenedorProductos">
      {productos.map(item => <Item key={item.id} {...item}/>)}
    </div>
  )
}

export default Itemlist