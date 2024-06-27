let totalClientes=localStorage.getItem("arrayNuevoRegistro")?JSON.parse(localStorage.getItem("arrayNuevoRegistro")):[]
let totalProductos=localStorage.getItem("nuevoProductoRegistro")?JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]
let totalCompras=localStorage.getItem("compras")?JSON.parse(localStorage.getItem("compras")):[]

const mostrarTotalCompras=()=>{
    let resultado=document.getElementById("totalCompras")
    let valorTotal=totalCompras.length;
    
    
    
    resultado.innerHTML=`Total Compras : ${valorTotal}`
}
mostrarTotalCompras()


const mostrarTotalProductos=()=>{
    let resultado=document.getElementById("totalProductos")
let valorTotal=totalProductos.length;

console.log(totalProductos)

resultado.innerHTML=`Total Productos : ${valorTotal}`
}
mostrarTotalProductos()


const mostrarTotalClientes=()=>{
    let resultado=document.getElementById("totalClientes")
    let valorTotal=totalClientes.length;
    
    
    
    resultado.innerHTML=`Total Clientes : ${valorTotal}`
}
mostrarTotalClientes()

