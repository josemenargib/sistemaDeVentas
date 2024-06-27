
let nuevoProductoRegistro=localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]


if(localStorage.getItem("nuevoProductoRegistro")==null){
    localStorage.setItem("nuevoProductoRegistro",JSON.stringify(nuevoProductoRegistro))
}

const guardar=()=>{
    
    let nombre=document.getElementById("nombre").value
    let codigo=document.getElementById("codigo").value
    let precioVenta=parseFloat(document.getElementById("precioVenta").value)
    let precioCompra=parseFloat(document.getElementById("precioCompra").value)
    let marca=document.getElementById("marca").value
    let categoria=document.getElementById("categoria").value
    let unidad=document.getElementById("unidad").value

    
if(nombre!=""&&codigo!=""&&!isNaN(precioVenta)&&!isNaN(precioCompra)&&marca!=""&&categoria!=""&&unidad!=""){
    console.log("hola")
    let objeto={
        nombre,
        codigo,
        precioVenta,
        precioCompra,
        marca,
        cantidad:10,
        categoria,
        unidad,
        estado:true
        
    }
   nuevoProductoRegistro.push(objeto)
   localStorage.setItem("nuevoProductoRegistro",JSON.stringify(nuevoProductoRegistro))
   window.location.href=("productos-lista.html")
}else{
    alert("error")
    console.log("hola")
}
 

}
