const { info, log } = require('node:console')
const fs = require('node:fs');
const path = require('node:path');
// File system => Interactuar con archivos del sistema 


console.log(path.sep, 'Hola');
const pathFile = path.join('recursos', 'lista.txt')

console.log(path.extname(pathFile));
// Buena practica a la hora de usar archivos y carpetas hay que usar path
console.log(pathFile);

// LLamada Promesas o Asyncrono
const file = fs.readFile(pathFile,  'utf-8' , (err, info) => {
    if (err) {
        console.log(err);
        return err
    }
    console.log(info);
})