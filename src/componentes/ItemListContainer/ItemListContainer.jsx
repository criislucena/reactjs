import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import Itemlist from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    

    useEffect(()=>{
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

        funcionProductos(idCategoria)
        .then(res=> setProductos(res))

    },[idCategoria])
    return (
    <>
        <h2> Mis Productos</h2>
        <Itemlist productos={productos}/>
    </>
    )
}

export default ItemListContainer