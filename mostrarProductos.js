// creo el producto para mostrar en el html

const mostrarProducto = (nuevoProducto) => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `<h3>${nuevoProducto.titulo}</h3>
                                <p>Id: ${nuevoProducto.id}</p>
                                <p>${nuevoProducto.descripcion}</p>
                                <p>$ ${nuevoProducto.precio}.-</p>
                                <p>Stock: ${nuevoProducto.stock}</p>`

    muestraProductos.append(tarjetaProducto)
}

const muestraProductos = document.querySelector("#muestraProductos")
todosLosProductos.forEach((producto) => {
    mostrarProducto(producto)
    
});