
let nuevoRegistroProveedor=localStorage.getItem("nuevoRegistroProveedor")? JSON.parse(localStorage.getItem("nuevoRegistroProveedor")):[]

if(localStorage.getItem("nuevoRegistroProveedor")==null){
    localStorage.setItem("nuevoRegistroProveedor",JSON.stringify(nuevoRegistroProveedor))
}


const guardar=()=>{

    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let identificacion=document.getElementById("identificacion").value
    let contacto=document.getElementById("contacto").value

    if(nombre!=""&&apellido!=""&&identificacion!=""&&contacto!=""){
        let objeto={
        nombre,
        apellido,
        identificacion,
        contacto
    }
    nuevoRegistroProveedor.push(objeto)
    localStorage.setItem("nuevoRegistroProveedor",JSON.stringify(nuevoRegistroProveedor))
    }else{
        alert("todos los campos son requeridos")
    }  
   window.location.href="proveedores-lista.html" 






}

