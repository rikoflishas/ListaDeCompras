/*
Imagina que eres parte del equipo encargado de crear una lista de compras 
utilizando un arreglo. Los usuarios deben poder añadir productos a la lista,
 eliminar productos y ver la lista completa de compras.

Asegúrate de que no haya productos duplicados en la lista.

*/ 

const listaDeCompras = ["pepinillos","jamon","queso","huevo","carne","pollo","aguacate","aceite de oliva","leche",
    "cuadernos", "plumas", "lapices", "borrador"];

//AGREGUE UN PRODUCTO AL FINAL DE LA LISTA
let agregarProducto = (producto) => {
    listaDeCompras.push();
}

//ELIMINAR UN PRODUCTO AL FINAL DE LA LISTA
let eliminarProducto = (producto) =>{
    listaDeCompras.pop();
}

//IMPRIME TODOS LOS PRODUCTOS DE LA LISTA
let mostrarLista = () => {
    for(let i = 0; i < listaDeCompras.length; i++){
        console.log(listaDeCompras[i]);
    }
}