  perfilDefecto={
    nombre:"carlosJOSE",
    apellido:"mendieta",
    user:"jc",
    email:"jc@gmail"
}

  perfil=localStorage.getItem("perfil")? JSON.parse(localStorage.getItem("perfil")):perfilDefecto

if(localStorage.getItem("perfil")==null){
    localStorage.setItem("perfil",JSON.stringify(perfil))
}

const cargarPerfil=()=>{
    document.getElementById("usuarioFoto").innerHTML=perfil.usuario
}
cargarPerfil()

