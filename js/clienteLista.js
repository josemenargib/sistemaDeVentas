
let obtenerDatos=JSON.parse(localStorage.getItem("arrayNuevoRegistro"))
console.log(obtenerDatos[0])
if(localStorage.getItem("arrayNuevoRegistro")!=null){
    localStorage.setItem("arrayNuevoRegistro",JSON.stringify(obtenerDatos))
}
const mostrarDatos=()=>{
    let tablaDatos=document.querySelector("#tablaClientesLista tbody")
    let texto=""

    obtenerDatos.forEach((element,i) => {
        texto+=`<tr>
                    <td>${i+1}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.identificacion}</td>
                    <td><div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm">Editar</button>
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </div></td>

        </tr>`
        
    });
    tablaDatos.innerHTML=texto

}
mostrarDatos()