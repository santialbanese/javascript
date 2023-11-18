//pre entrega numero 1:

// CASO 1
let cantidad;
function Arlequin(cantidad){
    let tipoBombon = prompt("Ingrese que tipo de bombon Arlequin va a comprar:\n 1-Rocher\n 2-Dulce de Leche\n 3-Rojo\n 4-Violeta");
    if(tipoBombon == "1"){
        tipoBombon = "Rocher";
    }else if(tipoBombon == "2"){
        tipoBombon = "Dulce de Leche";
    }else if(tipoBombon == "3"){
        tipoBombon = "Rojo";
    }else{
        tipoBombon = "Violeta";
    }
    cantidad= parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
    let compra2 = parseInt(prompt("La cantidad a pagar es: $" + cantidad * 2500 + ", quiere comprarlo?\n 1- Si\n 2-No"));
    if(compra2 == 1){
        alert("Usted ha comprado " + cantidad + "kilos de bombones Arlequin "+ tipoBombon + ".");
    }else{
        alert("Usted no ha comprado nada");
    }
}

// CASO 2
let cantidad2;
    function Bloquecitos(){
        let tipoBombon = prompt("Ingrese que tipo de bombon Bloquecito va a comprar:\n 1-Amor leche\n 2-Amor blanco");
        if(tipoBombon == "1"){
            tipoBombon = "Amor leche";
        }else{
            tipoBombon = "Amor blanco";
        } 
        cantidad2= parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
        let compra2 = parseInt(prompt("La cantidad a pagar es: $" + cantidad2 * 3000 + ", quiere comprarlo?\n 1- Si\n 2-No"));
        if(compra2 == 1){
            alert("Usted ha comprado " + cantidad2 + " kilos de bombones Bloquecitos " + tipoBombon + ".");
                    
        }
}

// CASO 3
let cantidad3;
    function Corazones(){
        let tipoBombon = prompt("Ingrese que tipo de bombon Corazón va a comprar:\n 1-Impreso semiamargo\n 2-Impreso leche\n 3-Impreso rojo");
        if(tipoBombon == "1"){
            tipoBombon = "Impreso semiamargo";
        }else if(tipoBombon == "2"){
            tipoBombon = "Impreso leche";
        }else{
            tipoBombon = "Impreso rojo";
        }
        cantidad3= parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
        let compra2 = parseInt(prompt("La cantidad a pagar es: $" + cantidad3 * 2700 + ", quiere comprarlo?\n 1- Si\n 2-No"));
        if(compra2 == 1){
            alert("Usted ha comprado " + cantidad3 + " kilos de bombones Corazones " + tipoBombon + ".");
                    
        }
}


// CASO 4
let cantidad4;
    function Licor(){
        let tipoBombon = prompt("Ingrese que tipo de bombon Licor va a comprar:\n 1-Whisky\n 2-Cereza\n 3-Cognac\n 4-Rhum");
        if(tipoBombon == "1"){
            tipoBombon = "Whisky";
        }else if(tipoBombon == "2"){
            tipoBombon = "Cereza";
        }else if(tipoBombon == "3"){
            tipoBombon = "Cognac";
        }
        else{
            tipoBombon = "Rhum";
        }
        cantidad4= parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
        let compra2 = parseInt(prompt("La cantidad a pagar es: $" + cantidad4 * 3100 + ", quiere comprarlo?\n 1- Si\n 2-No"));
        if(compra2 == 1){
            alert("Usted ha comprado " + cantidad4 + " kilos de bombones Licor " + tipoBombon + ".");
                    
        }
}


// CASO 5
let cantidad5;
    function Macizos(){
        let tipoBombon = prompt("Ingrese que tipo de bombon Macizo va a comprar:\n 1-Flor blanca\n 2-Flor leche\n 3-Flor semiamarga\n 4-Hojita de menta\n 5-Gajito");
        if(tipoBombon == "1"){
            tipoBombon = "Flor blanca";
        }else if(tipoBombon == "2"){
            tipoBombon = "Flor leche";
        }else if(tipoBombon == "3"){
            tipoBombon = "Flor semiamarga";
        }else if(tipoBombon == "4"){
            tipoBombon = "Hojita de menta";
        }
        else{
            tipoBombon = "Gajito";
        }
        cantidad5= parseInt(prompt("Ingrese la cantidad de kilos que va a comprar:"));
        let compra2 = parseInt(prompt("La cantidad a pagar es: $" + cantidad5 * 2900 + ", quiere comprarlo?\n 1- Si\n 2-No"));
        if(compra2 == 1){
            alert("Usted ha comprado " + cantidad5 + " kilos de bombones Macizos: " + tipoBombon + ".");
                    
        }
}

let bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
while((bombon !== "SALIR") && (bombon !== "Salir") && (bombon !== "salir") && (bombon !== "6")){
    prompt("Ingrese nombre y apellido");
    prompt("Ingrese un mail");
    switch(bombon){
        case "1":
            Arlequin();
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
            break;
    
    
        case "2":
            Bloquecitos();
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
            break;
    
    
        case "3":
            Corazones();
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
            break;
    
    
        case "4":
            Licor();
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
            break;
    
    
        case "5":
            Macizos();
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
            break;
        default:
            prompt("ingresaste erroneamente");
            bombon = prompt("Ingrese el tipo de bombón que va a comprar:\n1-Arlequin\n2-Bloquecitos\n3-Corazones\n4-Licor\n5-Macizos\n6-SALIR");
    }
}
alert("saludos!");




