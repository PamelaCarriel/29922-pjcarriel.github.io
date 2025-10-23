function validar() {
  // Obtener los valores de los campos
  let valorEmail = document.getElementById('txtEmail').value.trim();
  let valorTelefono = document.getElementById('txtTelefono').value.trim();
  let valorFecha = document.getElementById('txtFecha').value;

  // Expresión regular para el correo
  let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

  // Limpiar mensajes previos
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorTelefono").textContent = "";
  document.getElementById("errorFecha").textContent = "";

  // === Validación de correo ===
  if (valorEmail === "") {
    document.getElementById("errorEmail").textContent = "⚠️ Debes ingresar un correo electrónico.";
    return false;
  }

  if (!valorEmail.includes("@")) {
    document.getElementById("errorEmail").textContent = "⚠️ El correo debe incluir el símbolo '@'.";
    document.getElementById('txtEmail').focus();
    return false;
  }

  if (!expresion.test(valorEmail)) {
    document.getElementById("errorEmail").textContent = "⚠️ El formato del correo es incorrecto.";
    document.getElementById('txtEmail').focus();
    return false;
  }

  // === Validación de teléfono ===
  if (valorTelefono.length !== 10 || isNaN(valorTelefono)) {
    document.getElementById("errorTelefono").textContent = "⚠️ El teléfono debe tener exactamente 10 dígitos numéricos.";
    document.getElementById('txtTelefono').focus();
    return false;
  }

  // === Validación de fecha ===
  if (valorFecha === "") {
    document.getElementById("errorFecha").textContent = "⚠️ Debes seleccionar una fecha de nacimiento.";
    return false;
  }

  let fechaIngresada = new Date(valorFecha);
  let limite = new Date("2025-01-01"); // límite: no puede ser igual o posterior a 2025

  if (fechaIngresada >= limite) {
    document.getElementById("errorFecha").textContent = "⚠️ La fecha no puede ser del año 2025 en adelante.";
    document.getElementById('txtFecha').focus();
    return false;
  }

  // Todo correcto
  return true;
}

// === Función para enviar el formulario ===
function enviarFormulario(boton) {
  if (validar()) {
    boton.disabled = true;
    boton.classList.add("enviando");
    boton.value = "⏳ Enviando datos…";

    setTimeout(() => {
      boton.form.submit();
    }, 1500);
  }
}
