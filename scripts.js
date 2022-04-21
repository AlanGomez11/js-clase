/////////// bucles "while" ////////

//escribir 5 veces el numero 1  

let contador =1;

while(contador<=5){
    console.log("1")
    console.log("contador")
    contador++;
}


/////////////////////////// for

for(let contador2 =0; contador2<=10; contador2++){
    console.log(contador2)
}

for(let contador2 =0; contador2<=100; contador2++){
    if(contador2%2 == 0){
        console.log(contador2)
    }
}

//////// decreciente
let str = "hola"

for(let i =0; i<=string.length; i++){
    console.log(str[i])
}
////////

for(let i=str.length; i>=0; i--){
    console.log(str)
}


/////////////////////// funciones ///////////////

function sumar (){
    let numero1 =2
    let numero2 =3
    let suma = numero1 + numero2
    console.log("la suma es " + suma)
}

function tomarCerveza(marca="quilmes"){
    console.log("tomo cerveza de la marca" + marca)
}



function multiplicar(num1, num2){
    return num1 * num2
}

let resultadoTotal = multiplicar(2,3)
console.log("el resultado es "+ resultadoTotal)


function convertirADolares(pesos){
    let dolares = pesos / 200
    return dolares
}

function queMepuedoComprar(plata){
    if(plata>10000){
        console.log("Compro auto")
    }else if(plata<10000 && plata>5000){
        console.log("compro moto")
    }else{
        console.log("sigue ahorrando")
    }
}



///////////// main
console.log("arranca el programa")
sumar()
tomarCerveza("heineken")
tomarCerveza()
tomarCerveza("brahma")
sumar()
multiplicar(4,3)


let pesos= parseFloat(prompt("cuantos pesos tienes?"))
let ahorro= convertirADolares(pesos)
console.log("tengo los dolares: " + ahorro)
queMepuedoComprar(ahorro)


//////////funcion declarativa "la puedes llamar antes de definirla"
function saludar(){
    console.log("hola amigo")
}

/////////funcion expresiva "la llamas luego de definirla"
let tomoCerveza = function(){
    console.log("tomo cerveza")
}









////////////for debagear
for(let i=0;i<15;i++){

    console.log(i)
}