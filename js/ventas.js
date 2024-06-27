const modal=document.getElementById("modal")
const instanciaModal=new bootstrap.Modal(modal)



let ventas=localStorage.getItem("ventas")? JSON.parse(localStorage.getItem("ventas")):[]
let clientes=localStorage.getItem("arrayNuevoRegistro")? JSON.parse(localStorage.getItem("arrayNuevoRegistro")):[]
let productos=localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]


const listar=()=>{
    let tabla=document.querySelector("#tablaVentas tbody")
    let texto=""
    if(ventas.length>0){
        ventas.forEach((element,i) => {
            if(clientes[element.cliente]){
                texto+=`<tr>
            
                        <td>${i+1}</td>
                         <td>${clientes[element.cliente].nombre}</td>
                         <td>${clientes[element.cliente].apellido}</td>
                         <td>${element.total}</td>
                         <td>${element.estado}</td>
                         <td><div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm" onclick="detalle(${i})">Detalle</button>
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </div></td>
            
            </tr>`

            }else{
                console.warn(`el proveedor con indice ${element.cliente} no existe en el arreglo proveedores`)
            }
             
        });
        
    }else{
        texto=` <tr><td colspan='4'>No hay compras registradas</td></tr>`
    }
    tabla.innerHTML=texto
    
}
listar()

const detalle=(param)=>{
    instanciaModal.show()
    let tabla=document.querySelector("#tablaDetalle tbody")
    let sumaTotal=document.getElementById("sumaTotal")
    let texto=""
    let suma=0
    ventas[param].detalle.forEach(element=>{
            suma+=element.subTotal
        texto+=`<tr>
        
                <td>${element.nombre}</td>
                <td>${element.codigo}</td>
                <td>${element.marca}</td>
                 <td>${element.cantidad}</td>
                  <td>${element.precioCompra}</td>
                   <td>${element.subTotal}</td>
         
        </tr>`
        
        console.log(element.subTotal);
    })
    tabla.innerHTML=texto
    sumaTotal.innerHTML=suma
    
}
