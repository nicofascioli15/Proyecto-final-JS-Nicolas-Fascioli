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



const agregarProductos = document.querySelector("#agregarProductos")

    agregarProductos.addEventListener("submit", (e)=>{
    e.preventDefault()
    const datosProductos = e.target.children
    const nuevoProducto = new producto (datosProductos["titulo"].value, datosProductos["descripcion"].value, datosProductos["precio"].value, datosProductos["stock"].value)
    todosLosProductos.push(nuevoProducto)
    localStorage.setItem("todosProductos", JSON.stringify(todosLosProductos))
    agregarProductos.reset()
    notificacionOk("Elemento creado con exito")
    
})


const notificacionOk = (notificacion) =>{
    Toastify({
        text: notificacion,
        duration: 3000
        }).showToast();
}