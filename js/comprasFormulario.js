
let productos=localStorage.getItem("nuevoProductoRegistro")? JSON.parse(localStorage.getItem("nuevoProductoRegistro")):[]
let proveedorCarrito=localStorage.getItem("nuevoRegistroProveedor")? JSON.parse(localStorage.getItem("nuevoRegistroProveedor")):[]

let compras=localStorage.getItem("compras")? JSON.parse(localStorage.getItem("compras")):[]
let carrito=localStorage.getItem("carrito")? JSON.parse(localStorage.getItem("carrito")):[]

let mostrarProductos=()=>{
    let tabla=document.querySelector("#tablaProductosRegistrados tbody")
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

let mostrarProveedorSelect=()=>{
    

let proveedor=document.getElementById("proveedor")
let texto=`<option value="" >Seleccione</option>`
console.log(proveedorCarrito)
proveedorCarrito.forEach((element,i) => {
    texto+=`<option value="${i}">${element.nombre}</option>` 
   
});
console.log(proveedorCarrito[4]);
proveedor.innerHTML=texto


}
mostrarProveedorSelect()




const agregarAlCarrito=(param)=>{
    console.log(productos[param].cantidad)
   if(productos[param].cantidad>0){
    
    let objeto={
        nombre:productos[param].nombre,
        codigo:productos[param].codigo,
        marca:productos[param].marca,
        cantidad:productos[param].cantidad,
        precioCompra:productos[param].precioCompra,
        subTotal:productos[param].precioCompra*productos[param].cantidad
        
    }
    carrito.push(objeto)
    localStorage.setItem("carrito",JSON.stringify(carrito))
   }
   listarCarrito()
}

const listarCarrito=()=>{
    let tabla=document.querySelector("#tablaCarrito tbody")
    let sumaTotal=document.getElementById("totalCarrito")
    let texto=""
    let suma=0
    carrito.forEach(element => {
        suma+=element.subTotal
        texto+=`<tr>
                    <td>${element.nombre}</td>
                    <td>${element.codigo}</td>
                    <td>${element.marca}</td>
                    <td>${element.cantidad}</td>
                     <td>${element.precioCompra}</td>
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

const guardarTerminarProceso=()=>{
    console.log(carrito);
    let proveedor=document.getElementById("proveedor").value
    
    let subTotal=carrito.reduce((acc,item)=>acc+item.subTotal,0)
    
        let objeto={
            proveedor,
            estado:true,
            total:subTotal,
            detalle:carrito
 
        }
        compras.push(objeto)
        localStorage.setItem("compras",JSON.stringify(compras))
        localStorage.setItem("nuevoProductoRegistro",JSON.stringify(productos))
        console.log(compras)
    
    window.location.href="compras-lista.html"
    limpiarTablaCarrito()
    
}

const limpiarTablaCarrito=()=>{
   

}
   

