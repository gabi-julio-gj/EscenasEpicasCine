
//alert("La fecha de hoy es: "+ dia + "/"+ (mes+1) + "/"+ anio)

function CalcularFecha(){
    var opcion = parseInt(prompt("Ingresa la cantidad de días"));
    //let opcion = prompt("Ingresa la cantidad de días")
    var fecha = new Date();
    let dias = opcion;
fecha.getDate();
var dia= fecha.getDate()+dias;
var mes = fecha.getMonth()+1;
var anio = fecha.getFullYear();
    salida.textContent = "La fecha de culminacion es :"+ dia + "/"+ (mes) + "/"+ anio
   /* console.log("Muestra la hora")*/
}
function limpiar(){
    salida.textContent = ``
   /* console.log("Limpia")*/
}
