/*
Imagina que eres parte del equipo encargado de crear una lista de compras 
utilizando un arreglo. Los usuarios deben poder añadir productos a la lista,
 eliminar productos y ver la lista completa de compras.

Asegúrate de que no haya productos duplicados en la lista.

*/ 

const listaDeCompras = ["pepinillos","jamon","queso","huevo","carne","pollo","aguacate","aceite de oliva","leche",
    "cuadernos", "plumas", "queso", "lapices", "borrador", "aceite de oliva"];

//CHECAR SI HAY DUPLICADOS
const duplicates = listaDeCompras.filter( (item, index) => listaDeCompras.indexOf(item) !== index);
console.log(`Duplicados: ${duplicates},`);

//AGREGUE UN PRODUCTO AL FINAL DE LA LISTA
let agregarProducto = (producto) => {
    listaDeCompras.push(producto);
}

//ELIMINAR UN PRODUCTO AL FINAL DE LA LISTA
let eliminarProducto = () =>{
    listaDeCompras.pop();
}

//IMPRIME TODOS LOS PRODUCTOS DE LA LISTA
let mostrarLista = () => {
    console.log("LISTA DE COMPRAS");
    for(let i = 0; i < listaDeCompras.length; i++){
        console.log(`${i+1}. ${listaDeCompras[i]}`);
    }
}

mostrarLista();
eliminarProducto();
agregarProducto("agujetas para zapatos");
console.log("-------------------------------------------------------------------")
mostrarLista();