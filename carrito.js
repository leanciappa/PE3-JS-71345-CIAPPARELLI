function totalProductos(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("totalCarrito").innerHTML = carrito.length;

}

totalProductos()

function mostrarCarrito(){
    const carritoCompra = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenido = "";
        for (const el of carritoCompra) {
            contenido += 
                    `<tr>
                        <th scope="row">${el.id}</th>
                        <td>${el.nombre}</td>
                        <td>${el.precio}</td>
                    </tr>`
        }
        
        document.getElementById("tablaCarrito").innerHTML = contenido;
        
        
    }



mostrarCarrito()