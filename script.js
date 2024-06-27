const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let contraseña=localStorage.getItem("contraseña")? JSON.parse(localStorage.getItem("contraseña")):[]
let email=localStorage.getItem("perfil")? JSON.parse(localStorage.getItem("perfil")):[]

const sigIn=()=>{
    console.log("hola");
    let emailUsuario=document.getElementById("email").value
    let password=document.getElementById("password").value
    //localStorage.setItem()
    console.log(contraseña.contraseñaActual)
    console.log(email.email)
    if(password===contraseña.contraseñaActual&&emailUsuario===email.email){
       console.log("correcto")
       window.location.href="ver-perfil.html"
    }
    else{
        console.log("error")
    }
}
const signUp=()=>{
let nombreUser=document.getElementById("nombreUser").value
let emailUser=document.getElementById("emailUser").value
let passwordUser=document.getElementById("passwordUser").value
let credencialesUser={
    nombreUser:nombreUser,
    emailUser:emailUser,
    passwordUser:passwordUser
}

    console.log("hola");
    localStorage.setItem("credenciales",JSON.stringify(credencialesUser))
    window.location.href="ver-perfil.html"
}