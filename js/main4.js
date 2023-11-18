class Bombon{
    constructor(tipo, opciones, precio, imagenes, descripcion){
    this.tipo = tipo;
    this.opciones = opciones;
    this.precio = precio;
    this.imagenes = imagenes;
    this.descripcion = descripcion;
    }
}
  const bombones = [
    new Bombon("Arlequin", "Dulce de Leche", 3800, "multimedia/arlequinDLL.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Arlequin", "Rocher", 3900, "multimedia/arlequinrocher.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Arlequin",  "Rojo", 3700, "multimedia/arlequinrojo.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Arlequin",  "Violeta", 3700, "multimedia/arlequinvioleta.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),

    new Bombon("Bloquecitos", "Amor leche", 4200, "multimedia/bloquecito-amor-leche.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Bloquecitos", "Amor blanco", 4400, "multimedia/bloquecito-amor-blanco.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),

    new Bombon("Corazones", "Impreso semiamargo", 4000, "multimedia/corazón-semiamargo.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Corazones", "Impreso leche", 3900, "multimedia/corazon-impreso-leche.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Corazones", "Impreso rojo", 3800, "multimedia/corazon-impreso-rojo.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),

    new Bombon("Licor", "Rhum", 3900, "multimedia/rhum.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Licor", "Cognac", 3900, "multimedia/cognac.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Licor", "Whisky", 3900, "multimedia/Whisky.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Licor", "Cereza", 3900, "multimedia/Cereza.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),

    new Bombon("Macizos", "Flor blanca", 3850, "multimedia/flor blanca.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Macizos", "Flor leche", 3950, "multimedia/flor leche.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Macizos", "Flor semiamarga", 4150, "multimedia/flor semi.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Macizos", "Hojita de menta", 4350, "multimedia/hojita de menta.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),
    new Bombon("Macizos", "Gajito", 3900, "multimedia/gajito.jpg", "Chocolate con leche y blanco relleno con dulce de leche."),

  ];

  let carrito = [];

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
        a.innerHTML = "Leer descripción";

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
          realizarCompra()
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

  let TOTAL = 0;
  function actualizarModalCarrito(){
    const carritoContenido = document.getElementById("carritoContenido");
    carritoContenido.innerHTML = "";

    carrito.forEach(producto => {
      const X = document.createElement("button");
      X.innerHTML = "BORRAR";

      const productoDiv = document.createElement("div");
      productoDiv.className = "claseProductos";
      productoDiv.innerHTML = `<div>
              <p><strong>Tipo:</strong> ${producto.tipo}</p>
              <p><strong>Opciones:</strong> ${producto.opciones}</p>
              <p><img src="${producto.imagenes}" alt="${producto.tipo}" style="max-width: 100px;"></p>
              <p><strong>Precio:</strong> $${producto.precio}</p>
          </div>`;
      TOTAL += producto.precio;
      carritoContenido.append(X, productoDiv);

      X.addEventListener("click", () => {
        carritoContenido.removeChild(productoDiv);
        carritoContenido.removeChild(X);
        TOTAL -= producto.precio;
        carrito = carrito.filter(item => item !== producto);
        guardarCarritoEnLocalStorage();

      })
  });

  }

  function realizarCompra(){
    const comprar = document.getElementById("botonCompra");
    const section = document.getElementById("idSection");
    carritoContenido.append(section);
    comprar.addEventListener("click", () => {
      section.style.display = 'block';
    })
  }
  renderizarProductos(bombones);
  cargarCarritoDesdeLocalStorage();
