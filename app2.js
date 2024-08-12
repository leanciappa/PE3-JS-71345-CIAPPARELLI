const productos = [
    {id:1, nombre:"ssd western green", precio: 50000, imagen:"lala"}, 
    {id:2, nombre:"ssd toshiba", precio: 40000, imagen:"lala"}, 
    {id:3, nombre:"ssd western blackd", precio: 50000, imagen:"lala"}, 
    {id:4, nombre:"ssd western blue", precio: 50000, imagen:"lala"}]


function mostrar (productos){
    let contenido = "";
    for (const el of productos) {
        contenido += 
            `<div class = "col-md-4">
                <img src=" ${el.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> ${el.nombre} </h5>
                <p class="card-text"> ${el.precio} </p>
                <button class="btn btn-dark" onclick="comprar(${el.id})"> comprar </button>
                </div>
            </div>`;
        
    };
    document.getElementById("cards").innerHTML = contenido;
}


// Agrega los productos al carrito y los guarda en localStorage
function comprar (id){
    const producto = productos.find(item => item.id===id);
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("El producto se ha agregado correctamente")
    
}

// Muestra la cantidad de productos en el carrito
function totalProductos(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("totalCarrito").innerHTML = carrito.length;
}


mostrar (productos)
totalProductos();