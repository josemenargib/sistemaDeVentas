

let arrayNuevoRegistro=localStorage.getItem("arrayNuevoRegistro")? JSON.parse(localStorage.getItem("arrayNuevoRegistro")):[]

if(localStorage.getItem("arrayNuevoRegistro")!=null){
    localStorage.setItem("arrayNuevoRegistro",JSON.stringify(arrayNuevoRegistro))
}



const guardar=()=>{
let nombre=document.getElementById("nombre").value
let apellido=document.getElementById("apellido").value
let identificacion=document.getElementById("identificacion").value
if(nombre!="" &&apellido!=""&&identificacion!=""){
    let objeto={

    nombre:nombre,
    apellido,
    identificacion,
}
arrayNuevoRegistro.push(objeto)
}
else{
    alert("Todos los campos son requeridos") 
}





localStorage.setItem("arrayNuevoRegistro",JSON.stringify(arrayNuevoRegistro))
window.location.href="clientes-lista.html"
}

