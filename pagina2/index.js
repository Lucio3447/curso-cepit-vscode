
let primerNumero = parseInt(prompt("ingrese el primer numero: "))


//alert("el numero ingresado fue: " + primerNumero)


let segundoNumero = parseInt(prompt("ingrese el segundo numero: "))


var parImpar = ((primerNumero + segundoNumero) % 2 == 0)? "par" : "impar"

alert("la suma es " + parImpar)

switch(parImpar){
    case "par": alert("la potencia de " + primerNumero + " es " + Math.pow(primerNumero, 2))  
                break
    case "impar": alert("la potencia de " + segundoNumero + " es " + Math.pow(segundoNumero, 2))
                  break
    default: alert("no es par/impar") //esto nunca se va a ejecutar
             break
}


alert("seno de " + primerNumero + ": " + Math.sin(primerNumero))

alert("coseno de " + primerNumero + ": " + Math.cos(primerNumero))

alert("math.asin: " + Math.asin(primerNumero))

alert("math.pi: " + Math.PI)
