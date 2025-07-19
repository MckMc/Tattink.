
function guardarCarrito() {
    const carrito = {
        contador0, contador1, contador2, contador3, contador4,total0, total1, total2, total3, total4,total
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito(){
    const data = localStorage.getItem("carrito");
    if (data) {
        const carrito = JSON.parse(data);
        contador0 = carrito.contador0;
        contador1 = carrito.contador1;
        contador2 = carrito.contador2;
        contador3 = carrito.contador3;
        contador4 = carrito.contador4;
        total0 = carrito.total0;
        total1 = carrito.total1;
        total2 = carrito.total2;
        total3 = carrito.total3;
        total4 = carrito.total4;
        total = carrito.total;
    }
}
const contenedorProductos = document.getElementById("carrito__productos");
function mostrarCarrito() {
    let li0 = document.getElementById("producto-0");
    if (contador0 > 0) {
        if(!li0){
            // Si no existe, lo creo
            li0 = document.createElement("li");
            li0.id = "producto-0";
            contenedorProductos.appendChild(li0);
        }
        // Lo actualizo exista o no
        li0.innerHTML=`
        <p>${contador0} X ${50000} = ${total0}</p>
        `;
    } else {
        if (li0) {
        contenedorProductos.removeChild(li0);
        }
    }
    // Producto 1
    let li1 = document.getElementById("producto-1");
    if (contador1 > 0) {
        if(!li1){
            // Si no existe, lo creo
            li1 = document.createElement("li");
            li1.id = "producto-1";
            contenedorProductos.appendChild(li1);
        }
        // Lo actualizo exista o no
        li1.innerHTML=`
        <p>${contador1} X ${76000} = ${total1}</p>
        `;
    } else {
        if (li1) {
        contenedorProductos.removeChild(li1);
        }
    }
    // Producto 2
    let li2 = document.getElementById("producto-2");
    if (contador2 > 0) {
        if(!li2){
            // Si no existe, lo creo
            li2 = document.createElement("li");
            li2.id = "producto-2";
            contenedorProductos.appendChild(li2);
        }
        // Lo actualizo exista o no
        li2.innerHTML=`
        <p>${contador2} X ${53000} = ${total2}</p>
        `;
    } else {
        if (li2) {
        contenedorProductos.removeChild(li2);
        }
    }
    let li3 = document.getElementById("producto-3");
    if (contador3 > 0) {
        if(!li3){
            // Si no existe, lo creo
            li3 = document.createElement("li");
            li3.id = "producto-3";
            contenedorProductos.appendChild(li3);
        }
        // Lo actualizo exista o no
        li3.innerHTML=`
        <p>${contador3} X ${50000} = ${total3}</p>
        `;
    } else {
        if (li3) {
        contenedorProductos.removeChild(li3);
        }
    }
    let li4 = document.getElementById("producto-4");
    if (contador4 > 0) {
        if(!li4){
            // Si no existe, lo creo
            li4 = document.createElement("li");
            li4.id = "producto-4";
            contenedorProductos.appendChild(li4);
        }
        // Lo actualizo exista o no
        li4.innerHTML=`
        <p>${contador4} X ${150000} = ${total4}</p>
        `;
    } else {
        if (li4) {
        contenedorProductos.removeChild(li4);
        }
    }
    // Total
        let liTotal = document.getElementById("carrito-total");
    if (total > 0) {
        if(!liTotal){
            // Si no existe, lo creo
            liTotal = document.createElement("li");
            liTotal.id = "carrito-total";
            contenedorProductos.appendChild(liTotal);
        }
        // Lo actualizo exista o no
        liTotal.innerHTML=`
        <p>Total: ${total}</p>
        `;
    } else {
        if (liTotal) {
        contenedorProductos.removeChild(liTotal);
        }
    }
}



const contenedor = document.getElementById("productos__caja");
        let suma = 0;
        let resta = 0;
        let total = 0;
        let contador0 = 0;
        let contador1 = 0;
        let contador2 = 0;
        let contador3 = 0;
        let contador4 = 0;
        let total0 = 0;
        let total1 = 0;
        let total2 = 0;
        let total3 = 0;
        let total4 = 0;
cargarCarrito();
mostrarCarrito();
fetch("../json/data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((producto, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="${producto.imagen}"></img>
                <div class= "precio__producto">
                <button class="boton__menos" data-indice= ${index}>-</button>
                <p>$${producto.precio}</p>
                <button class="boton__mas" data-indice= ${index}>+</button>
                </div>
            `
            contenedor.appendChild(li)
            // Accion para cada vez que apreto boton para restar
            const botonMenos = li.querySelector(".boton__menos");
            botonMenos.addEventListener("click", (e) => {
                let indice = Number(e.target.dataset.indice);
                switch (indice){
                    case 0:
                        resta = 50000;
                        if (total0 - resta >= 0 ) {
                            total0 = total0 - resta;
                            contador0 --;
                        }
                        console.log(resta);
                        console.log(total0);
                        console.log(contador0);
                        break;
                    case 1:
                        resta = 76000;
                        if (total1 - resta >= 0 ) {
                            total1 = total1 - resta;
                            contador1 --;
                        }
                        console.log(resta);
                        console.log(total1);
                        console.log(contador1);
                        break;
                    case 2:
                        resta = 53000;
                        if (total2 - resta >= 0 ) {
                            total2 = total2 - resta;
                            contador2 --;
                        }
                        console.log(resta);
                        console.log(total2);
                        console.log(contador2);
                        break;
                    case 3:
                        resta = 50000;
                        if (total3 - resta >= 0 ) {
                            total3 = total3 - resta;
                            contador3 --;
                        }
                        console.log(resta);
                        console.log(total3);
                        console.log(contador3);
                        break;
                    case 4:
                        resta = 150000;
                        if (total4 - resta >= 0 ) {
                            total4 = total4 - resta;
                            contador4 --;
                        }
                        console.log(resta);
                        console.log(total4);
                        console.log(contador4);
                        break;
                    default:
                        resta = 0;
                        break
                }
                total = total0 + total1 + total2 + total3 + total4;
                console.log(total);
                guardarCarrito();
                mostrarCarrito();
            });
            // Accion para mas
            const botonMas = li.querySelector(".boton__mas");
            botonMas.addEventListener("click", (e) => {
                let indice = Number(e.target.dataset.indice);
                switch (indice){
                    case 0:
                        suma = 50000;
                        total0 = total0 + suma;
                        contador0 ++;
                        console.log(suma);
                        console.log(total0);
                        console.log(contador0);
                        break;
                    case 1:
                        suma = 76000;
                        total1 = total1 + suma;
                        contador1 ++;
                        console.log(suma);
                        console.log(total1);
                        console.log(contador1);
                        break;
                    case 2:
                        suma = 53000;
                        total2 = total2 + suma;
                        contador2 ++;
                        console.log(suma);
                        console.log(total2);
                        console.log(contador2);
                        break;
                    case 3:
                        suma = 50000;
                        total3 = total3 + suma;
                        contador3 ++;
                        console.log(suma);
                        console.log(total3);
                        console.log(contador3);
                        break;
                    case 4:
                        suma = 150000;
                        total4 = total4 + suma;
                        contador4 ++;
                        console.log(suma);
                        console.log(total4);
                        console.log(contador4);
                        break;
                    default:
                        suma = 0;
                        break
                }
                total = total0 + total1 + total2 + total3 + total4;
                console.log(total);
                guardarCarrito();
                mostrarCarrito();
                Toastify({
                    text: "Agregaste al carrito!",
                    duration: 2000,
                    style: {
                        background: "linear-gradient(to right, #e7b71cff, #c18700ff)",
                        color: "#000"
                    },
                    borderRadius: "50px"
                }).showToast();
            });
        })
    })



