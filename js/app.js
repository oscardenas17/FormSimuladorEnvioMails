//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn =  document.getElementById('resetBtn');



//EVENT LISTENERS
eventLIsteners();

function eventLIsteners(){
    //Inicio de la app y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton de enviar en el submit
    //btnEnviar.addEventListener('click', enviarEmail);
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Boton de rest btn
    resetBtn.addEventListener('click', resetFormulario);
}





//FUNCTIONS
function inicioApp(){
    //deshabilitar en boton enviar
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){

    //Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar email
    //console.log(this.type)
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
        btnEnviar.disabled = false;
        }
    }
}


//Resetear el formulario 
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}


//cuando se envia el correo
function enviarEmail(e){
    //spinner al enviar el mail
    const SpinnerGif = document.querySelector('#spinner');
    SpinnerGif.style.display = 'block';

    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src  = 'img/mail.gif';
    enviado.style.display = 'block';



    //Ocultar spinner y mostrar gift de enviado
    setTimeout(function(){
        SpinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.requestFullscreen();
        },5000);


    },3000);
    e.preventDefault();


}


//verifica la longitud del texto en los campos
function validarLongitud(campo){

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');

    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    //sino es igual a -1 , encontro el @
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}