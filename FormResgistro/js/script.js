// Función para mostrar/ocultar el formulario confidencial
function mostrarConfidencial() {
    var tercero = document.getElementById('tercero');
    var formConfidencial = document.getElementById('formConfidencial');
   
    if (tercero.checked) {
        formConfidencial.style.display = 'block';
    } else {
        formConfidencial.style.display = 'none';
    }
}

// Función para habilitar/deshabilitar el botón ENVIAR DATOS
function controlarBotonEnviar() {
    var propietario = document.getElementById('propietario');
    var btnEnviar = document.getElementById('btnEnviarDatos');
   
    if (propietario.checked) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// Inicializar al cargar la página
window.onload = function() {
    document.getElementById('formConfidencial').style.display = 'none';
    document.getElementById('btnEnviarDatos').disabled = true;
}

// Validación adicional antes de enviar
function validarFormulario(event) {
    var propietario = document.getElementById('propietario');
    var tercero = document.getElementById('tercero');
    
    if (!propietario.checked && !tercero.checked) {
        alert('Por favor, selecciona al menos un tipo de entrega');
        event.preventDefault();
        return false;
    }
    return true;
}