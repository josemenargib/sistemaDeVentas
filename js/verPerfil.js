let perfilDefecto={
    nombre:"carlosJOSE",
    apellido:"mendieta",
    user:"jc",
    email:"jc@gmail"
}

let perfil=localStorage.getItem("perfil")? JSON.parse(localStorage.getItem("perfil")):perfilDefecto

if(localStorage.getItem("perfil")==null){
    localStorage.setItem("perfil",JSON.stringify(perfil))
}


const mostrarDatos=()=>{
    document.getElementById("nombre").value=perfil.nombre
    document.getElementById("apellido").value=perfil.apellido
    document.getElementById("usuario").value=perfil.usuario
    document.getElementById("email").value=perfil.email
    document.getElementById("usuarioFoto").innerHTML=perfil.usuario
}
mostrarDatos()



const guardar=()=>{
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let usuario=document.getElementById("usuario").value
    let email=document.getElementById("email").value
    perfil={
        nombre:nombre,
        apellido,
        usuario,
        email
        
    }
    document.getElementById("usuarioFoto").innerHTML=perfil.usuario
    localStorage.setItem("perfil",JSON.stringify(perfil))
}

// ---------------------
let contraseñaDefecto={
    contraseñaActual:"PEGASO",
    contraseñaNueva:"pegaso",
    repitaContraseña:"pegaso"
}

let contraseña=localStorage.getItem("contraseña")? JSON.parse(localStorage.getItem("contraseña")):contraseñaDefecto
if(localStorage.getItem("contraseña")==null){
    localStorage.setItem("contraseña",JSON.stringify(contraseña))
}

const mostrarContraseña=()=>{
    document.getElementById("contraseña").value=contraseña.contraseñaActual
    document.getElementById("nuevaContraseña").value=contraseña.contraseñaNueva
    document.getElementById("repitaContraseña").value=contraseña.repitaContraseña
    
}
mostrarContraseña()

const editarContraseña=()=>{
    let contraseñaActual=document.getElementById("contraseña").value
    let contraseñaNueva=document.getElementById("nuevaContraseña").value
    let repitaContraseña=document.getElementById("repitaContraseña").value
    
let contraseña={
    
    contraseñaActual,
    contraseñaNueva,
    repitaContraseña
}
localStorage.setItem("contraseña",JSON.stringify(contraseña))
}




