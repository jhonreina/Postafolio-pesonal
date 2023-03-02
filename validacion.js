//Haz tú validación en javascript acá
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');
error.style.color = 'red';


var form = document.getElementById('form');
form.addEventListener('submit', function (evt) {    
    evt.preventDefault();
    var mensajesError = [];
    
    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
    }
    
    if (email.value === null || email.value === '') {
        mensajesError.push('Ingresa tu email');
    }
    if (asunto.value === null || asunto.value === '') {
        mensajesError.push('Ingresa tu asunto');
    }
    if (mensaje.value === null || mensaje.value === '') {
        mensajesError.push('Ingresa tu mensaje');
    } else {
        alert('tu mensaje ha sido enviado correctamente')
        form.reset();        
    }

    error.innerHTML = mensajesError.join(', ')
});


  
