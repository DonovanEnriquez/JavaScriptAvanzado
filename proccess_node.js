console.log('Hola');
console.log(process.argv);
// console.log(process.env); //Todos lod dias en el backend y en el front 
//Manejar eventos 
// Forma en la que guardamos informacion sensible como constraseñas, tokens, etc.

// Electron => 
process.on('beforeExit', () => {
    // Cerrar sesiones de base de datos
    // Mandar mensajes
    // Cerrar funciones del sistema operativo
    console.log('Regresa pronto 😎');
})