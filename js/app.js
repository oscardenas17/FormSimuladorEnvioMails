//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');





//EVENT LISTENERS
eventLIsteners();

function eventLIsteners(){
    //Inicio de la app y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}





//FUNCTIONS
function inicioApp(){
    //deshabilitar en boton enviar
    btnEnviar.disabled = true;
}