
// pasar promt a numero (con parseInt)
let numeroUno = parseInt(prompt("ingrese el primer numero: "))
let numeroDos = parseInt(prompt("ingrese el segundo numero: "))

let suma = numeroUno + numeroDos
let resta = numeroUno - numeroDos
let mul = numeroUno * numeroDos
let div = numeroUno / numeroDos

// salto de linea: \n
alert("\nsuma: " + suma + " \nresta: " + resta + " \nmultiplicacion: " + mul + " \ndivision: " + div)

//prints
console.log("log")
console.error("error")
console.warn("warning")
console.info("info")

//condicionales, la condicion va dentro de los parentesis

//estructura condicional simple
if(numeroUno > 100) {    
    console.log(numeroUno + " es mayor a 100")    
}


//estructura condicional doble
if(suma % 2 == 0) { 
    console.log("la suma es par") 
} 
else { 
    console.log("la suma es impar")
}

//estructura condicional doble (con operador ternario)
//despues del ?, la primera rama es del verdadero, la segunda del falso
//entonces si numeroUno es mayor a numeroDos, es verdadero

let resultadoMayor = (numeroUno > numeroDos)? "el mayor es " + numeroUno : "el mayor es " + numeroDos
console.log(resultadoMayor)

//estructura condicional multiple
switch(numeroUno) {
    case 1:  alert("numero ingresado fue " + numeroUno) 
             break

    case 2:  alert("numero ingresado fue " + numeroUno) 
             break

    case 3:  alert("numero ingresado fue tres") 
             break
             
    default: console.log("no es ningun valor en el rango")
             break
}


//for(i; 1; 3) {}
