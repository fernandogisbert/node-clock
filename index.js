
const moduloFecha = require('./lib/moduloFecha.js');

let fechaHoy = moduloFecha.fechaGenerator();


setInterval(()=>{

    var date = new Date();

    console.log(`${fechaHoy} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

},1000)

