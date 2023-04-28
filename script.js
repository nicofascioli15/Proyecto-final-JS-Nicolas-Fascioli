const todosLosProductos = JSON.parse(localStorage.getItem("todosProductos")) || []


let id = 1


class producto {
    constructor (titulo, descripcion, precio, stock){
    this.id = id++
    this.titulo = titulo
    this.descripcion = descripcion
    this.precio = precio
    this.stock = stock
    }
}

// cree el producto

const agregarProductos = document.querySelector("#agregarProductos")

agregarProductos.addEventListener("submit", (e)=>{
    e.preventDefault()
    const datosProductos = e.target.children
    const nuevoProducto = new producto (datosProductos["titulo"].value, datosProductos["descripcion"].value, datosProductos["precio"].value, datosProductos["stock"].value)
    todosLosProductos.push(nuevoProducto)
    localStorage.setItem("todosProductos", JSON.stringify(todosLosProductos))
    agregarProductos.reset()
    mostrarProducto(nuevoProducto)
})

// voy a crear la tarjeta para mostrar por html el producto

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


// voy a recorrer el array de los productos asi voy agregandole a cada uno la tarjeta que cree arriba
