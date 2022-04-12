//Objeto usuario.
const usuario = {
    nombre: 'Sergio',
    apellido: 'Ortega',
    cursos: ['React','daw'],
};

//Recogemos el valor que no llega cómo parámetro y le extraemos los valores con esos nombres.
const nombrecompleto = ({nombre, apellido}) => `${nombre} ${apellido}`;
//Pasamos un usuario y le extraemos nombre, apellido.
document.write(nombrecompleto(usuario));

//Objeto nuevo usuario, sobrescribimos el nombre.
const nuevousuario = {
    //Los tres puntos nos indican que, una vez evaluada la variable va ha colocar uno tras otro todos los objetos.
    // similar a la concatenación de string.
    ...usuario,
    //Sobrescribimos en combre del usuario.
    nombre: 'Angela',
}

console.log('Nuevo usuario: ', nuevousuario)

//Renombrado de los atributos del usuario.
const {nombre : nuevonombre} = nuevousuario;

console.log('nuevousuario',nuevousuario);
//...otherCourses es otro array...
const [firstCourse, ...otherCourses] = newUser.courses;
console.log("firstCourse", firstCourse);
console.log("otherCourses",otherCourses);

//newObject Valores de CLAVE:VALOR al no poner el nombre, solo el valor se interpreta que es el mismo nombre.
const newObject = {newName, firstCourse};
console.log("newObject:" , newObject);


//
const sum = (...nums) => 
    nums.reduce((total, num) => total + num, 0);
console.log("sum: ", sum(1,2,3,4,5,6,7,8,9));

//Podremos exportar todas las variables o clases necesarias, pero solo una por defecto.
export const saludo = a => `Hola ${a} `;