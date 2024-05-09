// Importar archivos

const { sum, multi } = require('./operaciones')
const { vehiculos } = require('./CONSTANTS')
const os = require('os')

console.log(sum(10,20));
console.log(multi(10,20));

vehiculos.forEach(v => {
    console.log('El carro que tenemos disponible: ' + v.modelo);
})

console.log(os.totalmem() + ' memoria disponible ');
console.log(os.cpus().length + ' procesadores disponibles') ;
console.log(os.hostname() + ' Nombre del Host');
