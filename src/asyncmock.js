const misProductos =[
    {id: "1", nombre: "Charles Oliveira", precio: 800, img:"/imagenes/charlesoliveira.webp", idCat:"Figuras de Peleadores", stock:10},
    {id: "2", nombre: "Ilia Topuria", precio: 800, img:"/imagenes/iliatopuria.webp", idCat:"Figuras de Peleadores", stock:10},
    {id: "3", nombre: "Alex Pereira", precio: 700, img:"/imagenes/alexpereira.webp", idCat:"Figuras de Peleadores", stock:10},
    {id: "4", nombre: "Conor Mcgregor", precio: 900, img:"/imagenes/conormcgregor.webp", idCat:"Figuras de Peleadores", stock:10},
    {id: "5", nombre: "Camiseta UFC para hombre Negra", precio: 2000, img:"/imagenes/camisanegraufc.webp", idCat:"Ropa", stock:10},
    {id: "6", nombre: "Short UFC Negro", precio: 900, img:"/imagenes/shortufc.webp",idCat:"Ropa", stock:10},
    {id: "7", nombre: "Guantes UFC Negros", precio: 900, img:"/imagenes/guantesufc.webp",idCat:"Protecciones", stock:10},
]

export const getProductos =() =>{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            const producto = misProductos.find(Item => Item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}