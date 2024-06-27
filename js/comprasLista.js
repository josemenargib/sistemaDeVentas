const modal=document.getElementById("modal")
const instanciaModal=new bootstrap.Modal(modal)



let compras=localStorage.getItem("compras")? JSON.parse(localStorage.getItem("compras")):[]
let proveedores=localStorage.getItem("nuevoRegistroProveedor")? JSON.parse(localStorage.getItem("nuevoRegistroProveedor")):[]
let productos=localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]


const listar=()=>{
    let tabla=document.querySelector("#tablaCompras tbody")
    let texto=""
    if(compras.length>0){
        compras.forEach((element,i) => {
            if(proveedores[element.proveedor]){
                texto+=`<tr>
            
                        <td>${i+1}</td>
                         <td>${proveedores[element.proveedor].nombre}</td>
                         <td>${proveedores[element.proveedor].contacto}</td>
                         <td>${element.total}</td>
                         <td>${element.estado}</td>
                         <td><div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm" onclick="detalle(${i})">Detalle</button>
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </div></td>
            
            </tr>`

            }else{
                console.warn(`el proveedor con indice ${element.proveedor} no existe en el arreglo proveedores`)
            }
             console.log(proveedores[element.proveedor].nombre);
             console.log([element.proveedor]);
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
    compras[param].detalle.forEach(element=>{
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
