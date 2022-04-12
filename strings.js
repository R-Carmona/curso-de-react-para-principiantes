const instrumentos = ['Saxofon', 'Piano','Clarinete']

//Podemos escribir dentro del string expresiones.
document.write(`El curso es sobre ${instrumentos[0]}`)

const longitud = instrumentos.length;

document.write(`
    ${longitud > 1 ? `Los ${longitud} instrumentos son: ` : `El instrumento es: `}
    ${instrumentos.join(", ")} 
`);