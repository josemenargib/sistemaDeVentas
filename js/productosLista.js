const modal=document.getElementById("exampleModal")
const instanciaModal=new bootstrap.Modal(modal)




let mostrarDatosProductos= localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]

if(localStorage.getItem("nuevoProductoRegistro")==null){
    localStorage.setItem("nuevoProductoRegistro",JSON.stringify(mostrarDatosProductos))
}


const mostrarRegistros=()=>{
    let tablaProductos=document.querySelector("#tablaProductosRegistrados tbody")
    let texto=""

    mostrarDatosProductos.forEach((element,i) => {
        texto+=`<tr class="text-center">
        
            <td>${element.nombre}</td>
            <td>${element.codigo}</td>
            <td>${element.precioVenta}</td>
            <td>${element.cantidad}</td>
            <td>${element.precioCompra}</td>
            <td>${element.marca}</td>
            <td>${element.categoria}</td>
            <td>${element.unidad}</td>
            <td><span class="badge bg-${element.estado? "success":"danger"}">${element.estado? "Activo":"Inactivo"}</span> </td>
            <td><div class="btn-group">
                        <button  type="button" class="btn btn-info btn-sm" onclick="estado(${i})">Estado</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="editar(${i})">Editar</button>
                    </div></td>

        </tr>`
        
    });
    tablaProductos.innerHTML=texto
}
mostrarRegistros()


const estado=(param)=>{
   mostrarDatosProductos[param].estado=!mostrarDatosProductos[param].estado
    mostrarRegistros()
    
}

const editar=(param)=>{
    instanciaModal.show()
}



