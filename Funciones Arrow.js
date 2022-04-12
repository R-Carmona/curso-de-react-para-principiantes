function double2(a){
    return a * 2;
}

doble = (a) => a*2;
/*doble = Nombre funcion 
(a) = parametros 
=> return  si tiene solo una linea*/

const sum =  (a,b) => a + b;

const factorial = a => {
    if(a <=1){
        return 1;
    }
    return a * factorial(a - 1);
}

potencia = (base, exponente) => {
    if (exponente == 0){
        return 1;
    }else{
        return base ** exponente
    }
 
}


document.write(doble(2));


//document.write(saludo())
document.write(potencia(2,5))