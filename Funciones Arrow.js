doble = (a) => a*2;
/*doble = Nombre funcion 
(a) = parametros 
=> return  si tiene solo una linea*/

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