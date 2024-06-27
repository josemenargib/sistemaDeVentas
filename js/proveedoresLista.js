let mostrarDatosProveedor=localStorage.getItem("nuevoRegistroProveedor")? JSON.parse(localStorage.getItem("nuevoRegistroProveedor")):[]
console.log(mostrarDatosProveedor)
if(localStorage.getItem("nuevoRegistroProveedor")==null){
    localStorage.setItem("nuevoRegistroProveedor",JSON.stringify(mostrarDatosProveedor))
}

const mostrarDatos=()=>{
    let tablaProveedores=document.querySelector("#tablaProveedores tbody")
    let texto=""

    mostrarDatosProveedor.forEach((element,i) => {
        texto+=`<tr>
                <td>${i+1}</td>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.identificacion}</td>
                <td>${element.contacto}</td>
                <td>
                <div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm">Editar</button>
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </div>
                </td>
        
        </tr>`
    });
    tablaProveedores.innerHTML=texto
}
mostrarDatos()