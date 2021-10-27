const usuario = {
    nombre: 'Sergio',
    apellido: 'Ortega',
    cursos: ['React','daw'],
};

const nombrecompleto = ({nombre, apellido}) => `${nombre} ${apellido}`;
document.write(nombrecompleto(usuario));

const nuevousuario = {
    ...usuario,
    nombre: 'Angela',
}

console.log('Nuevo usuario: ', nuevousuario)

const {nombre : nuevonombre} = nuevousuario;

console.log('nuevousuario',nuevousuario);

export const saludo = a => `Hola ${a} `;