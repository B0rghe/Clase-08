class Articulo {
    constructor(codigo, titulo, categoria, precio, stock) {
        this.codigo = parseInt(codigo);
        this.titulo = titulo.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.oferta = false;
        this.vendidos = 0;
    }
    descuento() {
        this.precio = this.precio * 0.7;
        this.oferta = true;
    }
    venta(cantVenta) {
        this.vendidos = this.vendidos + cantVenta;
        this.stock = this.stock - cantVenta;
    }
}
const productos = [];
productos.push(new Articulo(1, "mat 6mm", "yoga", 2300.00, 10));
productos.push(new Articulo(2, "mat 8mm", "yoga", 2889.99, 6));
productos.push(new Articulo(3, "pelota 85cm", "pilates", 1380.00, 8));
productos.push(new Articulo(4, "pelota 65cm", "pilates", 1089.50, 8));

alert("Lista de Artículos:\n" + productos[0].codigo + " - " + productos[0].titulo + " - $" + productos[0].precio
                       + "\n" + productos[1].codigo + " - " + productos[1].titulo + " - $" + productos[1].precio
                       + "\n" + productos[2].codigo + " - " + productos[2].titulo + " - $" + productos[2].precio
                       + "\n" + productos[3].codigo + " - " + productos[3].titulo + " - $" + productos[3].precio);

let codigo = parseInt(prompt("Ingrese el codigo de producto que desea adquirir:"));
let cantidad = parseInt(prompt("Ingrese la cantidad:"));

function precioTotal(cantidad, precio, descuento){
    const total = cantidad * precio;
    if (descuento){
        alert("El precio total con descuento es de $" + total);
    }else {
        alert("El precio total es de $" + total);
    }
}

if ((codigo <= 4) && (codigo >= 1) && (cantidad <= (productos[codigo].stock))) {
    if (cantidad > 2){
        productos[codigo].descuento();
    }
    alert(precioTotal(cantidad, productos[codigo].precio, productos[codigo].oferta))
    productos[codigo].venta(cantidad);
}else if (cantidad > (productos[codigo].stock)){
    alert("No hay suficiente stock")
}else {
    alert("El codigo ingresado no es válido");
}

function buscar(producto) {
    return producto.categoria === 'MAT 8MM';
}
console.log(productos.find(buscar));