
let totalArticulos = 0;
let precioTotal = 0;
let productosEnCarrito = [];


function agregar(nombreProducto, precio) {
        
    totalArticulos++;
    precioTotal += precio;

    productosEnCarrito.push({
       nombre: nombreProducto,
       precio: precio
    });
                
    document.getElementById('total-items').textContent = totalArticulos;
    document.getElementById('total-precio').textContent = precioTotal;
            
    if (precioTotal > 50 ) {
        alert('¡Envío gratis aplicado!');
        console.log("Envío gratis aplicado")
    }
    console.log('Productos en el carrito:', productosEnCarrito);
}

function vaciar() {
            
    totalArticulos = 0;
    precioTotal = 0;
    productosEnCarrito = [];
            
           
    document.getElementById('total-items').textContent = totalArticulos;
    document.getElementById('total-precio').textContent = precioTotal; 

    alert('Carrito vaciado');

    console.log("Carrito vaciado completamente");
    console.log("No te puedo dar el envío gratis")
 }

