class Bombon{
    constructor(tipo, opciones, precio){
    this.tipo = tipo;
    this.opciones = opciones;
    this.precio = precio;
    }
}
  const bombones = [
    new Bombon("Arlequin", ["Rocher", "Dulce de Leche", "Rojo", "Violeta"], 3700),
    new Bombon("Bloquecitos", ["Amor leche", "Amor blanco"], 4200),
    new Bombon("Corazones", ["Impreso semiamargo", "Impreso leche", "Impreso rojo"], 3800),
    new Bombon("Licor", ["Whisky", "Cereza", "Cognac", "Rhum"], 3900),
    new Bombon("Macizos", ["Flor blanca", "Flor leche", "Flor semiamarga", "Hojita de menta", "Gajito"], 3850),
    new Bombon("Suizos con relleno frutal", ["Copito lemon", "Fresita", "Ananá", "Banana split", "Orange", "Maracuyá", "Frutos del bosque"], 4050)
  ];
  
  class Compra{
    constructor(bombones){
      this.bombones = bombones;
      this.compras = [];
      this.envio = false;
    }
    elegirBombon(){
      let elegir = parseInt(prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-Suizos con relleno frutal\n7- Salir"));
      if((elegir >= 1) && (elegir < 7))
        return elegir-1;
      else if(elegir === 7){
        return 10;
      }
      else
        (alert("Opción no válida. Por favor, elija una opción válida."))
        return this.elegirBombon();
    }
  
    elegirTipoBombon(categoria){
      if(categoria === 10){
        return 10;
      }
      const categoriaElegida = this.bombones[categoria];
      const opciones = categoriaElegida.opciones;
      const tipoElegido = parseInt(prompt("Elija el tipo de bombón " + categoriaElegida.tipo + ":\n" + opciones.map((opcion, index) => (index + 1) + " - " + opcion).join('\n'))) - 1;
      if(tipoElegido >= 0 && tipoElegido < opciones.length)
        return tipoElegido;
      else
      (alert("Opción no válida. Por favor, elija una opción válida."))
    return this.elegirTipoBombon(categoria);
    }

    elegirEnvio() {
        const envio = parseInt(prompt("¿Desea envío a domicilio?\n1-Sí\n2-No"));
        this.envio = envio === 1;
        return this.envio;
    }   
  
    elegirCantidad() {
      let cantidad = parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
      return cantidad;
    }
  
    calcularTotal(cant, categoria){
      let bombon1 = this.bombones[categoria].precio;
      let total = cant * bombon1;
      return total;
    }
  
    realizarCompra(categoria, tipoElegido1, nombre, total, verificar){
      const bombon = bombones[categoria].opciones[tipoElegido1];
      let alerta = parseInt(prompt("La cantidad a pagar es: $" + total + ", quiere comprarlo?\n 1- Si\n 2-No"));
      if(alerta === 1){
        alert("La compra se ha realizado con éxito, ha comprado el bombón " +bombones[categoria].tipo +" " + bombon+ " , gracias " +nombre+ "!");
        return 1;
      }  
      else
        alert("Usted no ha comprado nada");
        return verificar;
    }

    agregarCompra(compra) {
        this.compras.push(compra);
      }

    mostrarCarrito() {
        if (this.compras.length === 0) {
          alert("Su carrito de compras está vacío.");
        } else {
          let carritoTexto = "Carrito de compras:\n";
          this.compras.forEach((compra, index) => {
            carritoTexto += (index + 1) + ". " + compra + "\n";
          });
          alert(carritoTexto);
        }
      }
  }
  function conEnvio(){
    const fechaEnvio = new Date(prompt("Ingrese la fecha de envío (aaaa-mm-dd):"));
    if (isNaN(fechaEnvio)) {
        alert("Fecha de envío no válida. Por favor, ingrese una fecha válida en el formato aaaa-mm-dd.");
    } else {
        alert("Los bombones serán enviados en la fecha ingresada: " + fechaEnvio.toDateString());
    }
  }


  const inicio = parseInt(prompt("bienvenido! desea comprar bombones?\n 1-Si.\n 2-No."));
  if(inicio === 1){
    let verificar;
    const nombre = prompt("Ingrese nombre y apellido");
    const mail = prompt("Ingrese un mail");
    const compra = new Compra(bombones);
    const categoria = compra.elegirBombon();
    const tipoElegido1 = compra.elegirTipoBombon(categoria);
    if(tipoElegido1 === 10)
        alert("Saludos!")
    else{
        let cant = compra.elegirCantidad();
        let total = compra.calcularTotal(cant, categoria);
        let envio = compra.elegirEnvio();
        verificar = compra.realizarCompra(categoria, tipoElegido1, nombre, total, verificar);
        if(verificar == 1){
            const compraRealizada = `${cant} kg de ${bombones[categoria].tipo} (${bombones[categoria].opciones[tipoElegido1]}) - Total: $${total}`;
            compra.agregarCompra(compraRealizada);   
            }
        let continuar = parseInt(prompt("¿Desea comprar más bombones?\n 1-Si.\n 2-No.")); 
        while(continuar === 1){
            const categoria = compra.elegirBombon();
            const tipoElegido1 = compra.elegirTipoBombon(categoria);
            if(tipoElegido1 === 10){
                continuar = 0;
                alert("Saludos!")
            }
            else{
                let cant = compra.elegirCantidad();
                let total = compra.calcularTotal(cant, categoria);
                compra.realizarCompra(categoria, tipoElegido1, nombre, total, verificar);
                if(verificar == 1){
                    const compraRealizada = `${cant} kg de ${bombones[categoria].tipo} (${bombones[categoria].opciones[tipoElegido1]}) - Total: $${total}`;
                    compra.agregarCompra(compraRealizada);   
                }
                continuar = parseInt(prompt("¿Desea comprar más bombones?\n 1-Si.\n 2-No."));
            }
        }
        compra.mostrarCarrito();
        if (compra.envio) {
            conEnvio();
        }
        alert("Gracias por su visita, saludos!");
    }
  }
  else
  alert("Gracias por su visita, saludos!");