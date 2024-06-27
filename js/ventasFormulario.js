
let productos=localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]



let carritoVentas=localStorage.getItem("carritoVentas")? JSON.parse(localStorage.getItem("carritoVentas")):[]
let clientesCarrito=localStorage.getItem("arrayNuevoRegistro")? JSON.parse(localStorage.getItem("arrayNuevoRegistro")):[]
let ventas=localStorage.getItem("ventas")? JSON.parse(localStorage.getItem("ventas")):[]

let mostrarProductos=()=>{
    let tabla=document.querySelector("#tablaVentasRegistradas tbody")
    let texto=""

    productos.forEach((element,i) => {
        texto+=`<tr>
                    <td>${element.nombre}</td>
                    <td>${element.codigo}</td>
                    <td>${element.marca}</td>
                    <td>10</td>
                    <td>${element.precioCompra}</td>
                    <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm" onclick="agregarAlCarrito(${i})">➕</button>
                        
                    </div></td>

        </tr>`
    });
    tabla.innerHTML=texto
}
mostrarProductos()

// lista carrito
// enviar el proveedor al carrito de comprasFormulario

let mostrarClienteSelect=()=>{
    

let proveedor=document.getElementById("cliente")
let texto=`<option value="" >Seleccione</option>`

clientesCarrito.forEach((element,i) => {
    texto+=`<option value="${i}">${element.nombre}</option>` 
   
});

proveedor.innerHTML=texto


}
mostrarClienteSelect()




const agregarAlCarrito=(param)=>{
    
   if(productos[param].cantidad>0){
    
    let objeto={
        nombre:productos[param].nombre,
        codigo:productos[param].codigo,
        marca:productos[param].marca,
        cantidad:productos[param].cantidad,
        precioVenta:productos[param].precioVenta,
        subTotal:productos[param].precioVenta*productos[param].cantidad
        
    }
    carritoVentas.push(objeto)
    localStorage.setItem("carritoVentas",JSON.stringify(carritoVentas))
   }
   listarCarrito()
}

const listarCarrito=()=>{
    let tabla=document.querySelector("#tablaCarritoVentas tbody")
    let sumaTotal=document.getElementById("totalCarrito")
    let texto=""
    let suma=0
    carritoVentas.forEach(element => {
        suma+=element.subTotal
        texto+=`<tr>
                    <td>${element.nombre}</td>
                    <td>${element.codigo}</td>
                    <td>${element.marca}</td>
                    <td>${element.cantidad}</td>
                     <td>${element.precioVenta}</td>
                     <td>${(element.subTotal)}</td>
                      <td><div class="btn-group">
                        <button type="button" class="btn btn-info btn-sm">Editar</button>
                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                    </div></td>
        
        </tr>`

        
        
    });
    sumaTotal.innerHTML=suma.toFixed(2)
    tabla.innerHTML=texto
}
listarCarrito()

const terminarProceso=()=>{
    
    let cliente=document.getElementById("cliente").value
    
    let subTotal=carritoVentas.reduce((acc,item)=>acc+item.subTotal,0)
    
        let objeto={
            cliente,
            estado:true,
            total:subTotal,
            detalle:carritoVentas
 
        }
        ventas.push(objeto)
        localStorage.setItem("ventas",JSON.stringify(ventas))
        localStorage.setItem("nuevoProductoRegistro",JSON.stringify(productos))
        console.log(ventas)
    
    window.location.href="ventas-lista.html"
    limpiarTablaCarrito()
    
}

const limpiarTablaCarrito=()=>{
   

}
   

