
var moduloFecha = {

    fechaGenerator: function () {

       let fecha = new Date();
       let fechaActual =`${fecha.getUTCDate()}/${fecha.getUTCMonth() + 1}/${fecha.getFullYear()}`;

       return fechaActual;
    }
}

module.exports = moduloFecha;