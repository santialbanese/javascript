class Bombon{
    constructor(tipo, opciones, precio, imagenes, descripcion){
    this.tipo = tipo;
    this.opciones = opciones;
    this.precio = precio;
    this.imagenes = imagenes;
    this.descripcion = descripcion;
    }
}
  const bombones = [];
  let carrito = [];

  function obtenerBombonesJSON() {
    return new Promise((resolve, reject) => {
      fetch('./productos.json').then((response) => {
        return response.json();
      }).then((responseJson) => {
        for (const filaBombon of responseJson) {
          for (const unBombon of filaBombon) {
            
            const { tipo, opciones, precio, imagenes, descripcion } = unBombon;
            bombones.push(new Bombon(tipo, opciones, precio, imagenes, descripcion));
          }
        }
  
        resolve();
      });
    });
  }


  function renderizarProductos(bombones) {
    const contenedor = document.getElementById("contenedor");

    for(const bombon of bombones) {

        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-3 mb-2 p-4 divP";

        const divCard = document.createElement("div");
        divCard.className = "card borde";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = bombon.tipo;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio:</strong> $${bombon.precio}`;

        const p2 = document.createElement("p");
        p2.className = "card-text";
        p2.innerHTML = `<strong>Tipo:</strong> ${bombon.opciones}`;

        const img = document.createElement("img");
        img.className = "claseImg";
        img.src = bombon.imagenes;

        const a = document.createElement("a");
        a.id = `descripcion-${bombon.tipo}`;
        a.className = "claseA";
        a.innerHTML = "Leer descripción...";

        const a2 = document.createElement("a");
        a2.id = `descripcion-${bombon.tipo}`;
        a2.className = "claseA2";
        a2.innerHTML = "Ocultar descripción";

        const desc = document.createElement("p");
        desc.className = "descripcionCompleta";
        desc.innerText = bombon.descripcion;

        const button = document.createElement("button");
        button.className = "claseBoton";
        button.innerHTML = `<strong>Agregar al carrito</strong>`

        divCardBody.append(h5, p, p2, a, a2, img, desc, button);
        divCard.append(divCardBody);
        divPadre.append(divCard);
        contenedor.append(divPadre);

        a.addEventListener("click", () => {
          desc.style.display = 'block';
          a.style.display = 'none';
          if(a.style.display = 'none')
            a2.style.display = 'block';
        });

        a2.addEventListener("click", () => {
          desc.style.display = 'none';
          a.style.display = 'block';
          a2.style.display = 'none';
        });

        button.addEventListener("click" , () => {
          const nuevoBombon = {
            tipo: bombon.tipo,
            opciones: bombon.opciones,
            precio: bombon.precio,
            imagenes: bombon.imagenes
          };

          carrito.push(nuevoBombon);
          guardarCarritoEnLocalStorage();
          actualizarModalCarrito();
          realizarCompra();

          contadorCarrito++;
        actualizarContadorCarrito();
        });

    }
  }


  function guardarCarritoEnLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function cargarCarritoDesdeLocalStorage(){
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado){
      carrito = JSON.parse(carritoGuardado);
      actualizarModalCarrito();
    }
  }

  function actualizarModalCarrito(){
    carritoContenido = document.getElementById("carritoContenido");
    const totalElement = document.getElementById("total");
    carritoContenido.innerHTML = "";
    let total = 0;

    

    carrito.forEach(producto => {
      const X = document.createElement("button");
      X.innerHTML = "❌";

      const productoDiv = document.createElement("div");
      productoDiv.className = "claseProductos";
      productoDiv.innerHTML = `<div>
              <p><strong>Tipo:</strong> ${producto.tipo}</p>
              <p><strong>Opciones:</strong> ${producto.opciones}</p>
              <p><img src="${producto.imagenes}" alt="${producto.tipo}" style="max-width: 100px;"></p>
              <p><strong>Precio:</strong> $${producto.precio}</p>
          </div>`;
      total += producto.precio;
      carritoContenido.append(X, productoDiv);

      X.addEventListener("click", () => {
        carritoContenido.removeChild(productoDiv);
        carritoContenido.removeChild(X);
        total -= producto.precio;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        carrito = carrito.filter(item => item !== producto);
        guardarCarritoEnLocalStorage();
        if(contadorCarrito - 1 >= 0 ){
          contadorCarrito--;
          actualizarContadorCarrito();
        }
        if(contadorCarrito == 0){
          Toastify({
            text: "Carrito vacío!",
            className: "info",
            style: {
              background: "linear-gradient(to right, #FF6347, #FF4500)", 
            }
          }).showToast();
        }
          
        if (carrito.length > 0) {
          comprar.style.display = 'block';
      } else {
          comprar.style.display = 'none';
      }
      })
  });
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  function actualizarContadorCarrito() {
    const contadorCarritoElement = document.getElementById("contadorCarrito");
    if (contadorCarritoElement) {
        contadorCarritoElement.textContent = contadorCarrito.toString();
    }
}

  function realizarCompra() {
    const comprar = document.getElementById("botonCompra");

    comprar.addEventListener("click", () => {
        
    const section = document.getElementById("idSection");
   
    if (section) {
      carritoContenido.append(section);
      section.style.display = 'block';
      comprar.style.display = 'none';
    } 
    
    const enviarFormulario = document.getElementById("enviar");

    enviarFormulario.addEventListener("click", () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "La compra fue realizada con éxito!",
        showConfirmButton: false,
        timer: 1500
      });
    })


    });
}

  let carritoContenido;
  let contadorCarrito = 0;
  obtenerBombonesJSON().then( () => {
    renderizarProductos(bombones);
    cargarCarritoDesdeLocalStorage();
  })
