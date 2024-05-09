const http = require('node:http')

const hostname = '127.0.0.1' //localhost
const port = 3000 //Este es el puerto por default de todos los equipos


// req y res -> Modulo entero de DEVF intro a backend
const server = http.createServer((req, res) => {
    res.statusCode = 200 //El 200 significa ok osea que todo salio bien
    //peticiones a una API
    res.setHeader('Content-Type', 'text/html')
    const html = `
        <div>
            <h1> Hola Mundo </h1>
            <a href='https://www.google.com'> Ir a Google </a>
        </div>
    `
    res.end(html)
})

// Para cerrar o matar el servido en la terminal presionamos crtl + c
// Arrancar el servidor
server.listen(port, hostname, () => {
    console.log('🚀 esta vivo!!');
})