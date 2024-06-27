const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




// registrar un usuario:
let objetoCredenciales=localStorage.getItem("credenciales")? JSON.parse(localStorage.getItem("credenciales")):[]
const resgistrarUser=()=>{
    let nombreUser=document.getElementById("nombreUser").value
    let apellidoUser=document.getElementById("apellidoUser").value
    let emailUser=document.getElementById("emailUser").value
    let passwordUser=document.getElementById("passwordUser").value

    if(nombreUser!=""&&apellidoUser!=""&&emailUser!=""&&passwordUser!=""){
        let objeto={
            nombreUser,
            apellidoUser,
            emailUser,
            passwordUser
        }
       
        localStorage.setItem("credenciales",JSON.stringify(objeto))
        localStorage.setItem("sesionIniciada","si")
        window.location.href="ver-prefil.html"

        }else{
            alert("todos los campos son requeridos")
        }
       

}

const login=()=>{
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let usuario=localStorage.getItem("credenciales")!=null? JSON.parse(localStorage.getItem("credenciales")):{}
    if(email==usuario.emailUser&&password==usuario.passwordUser){
        window.location.href="dashboard.html"
    }else{
        console.log("vacio o incorecto");
    }
}


