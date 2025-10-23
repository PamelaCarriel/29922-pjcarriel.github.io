// Archivo: js/logistica.js
// Controla el formulario de logística 100% con JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const propietario = document.getElementById("propietario");
  const tercero = document.getElementById("tercero");
  const btnEnviar = document.getElementById("btnEnviarDatos");
  const formConfidencial = document.getElementById("formConfidencial");
  const btnProcesar = document.getElementById("btnProcesar");

  // 🔹 Estado inicial
  btnEnviar.disabled = true;
  formConfidencial.style.display = "none";

  // 🔹 Mostrar / ocultar formulario confidencial
  tercero.addEventListener("change", () => {
    if (tercero.checked) {
      formConfidencial.style.display = "block";
      mostrarMensaje("Formulario confidencial habilitado 🔒", "#6c63ff");
    } else {
      formConfidencial.style.display = "none";
    }
  });

  // 🔹 Habilitar / deshabilitar botón ENVIAR DATOS
  propietario.addEventListener("change", () => {
    btnEnviar.disabled = !propietario.checked;
    if (propietario.checked) {
      mostrarMensaje("✅ Botón de envío habilitado", "#4CAF50");
    }
  });

  // 🔹 Simular envío del formulario de dirección
  btnEnviar.addEventListener("click", () => {
    const form = document.forms["FormDireccion"];
    if (!form.txtPrincipal.value || !form.txtTransversal.value) {
      mostrarMensaje("⚠️ Complete todos los campos antes de enviar.", "#e74c3c");
      return;
    }

    mostrarMensaje("📦 Datos de envío registrados correctamente", "#4CAF50");
    form.reset();
    propietario.checked = false;
    tercero.checked = false;
    btnEnviar.disabled = true;
    formConfidencial.style.display = "none";
  });

  // 🔹 Simular envío del formulario confidencial
  btnProcesar.addEventListener("click", () => {
    const formConf = document.forms["FormConfidencial"];
    if (!formConf.pswCodigoPostal.value || !formConf.Mensaje.value) {
      mostrarMensaje("⚠️ Complete la información confidencial.", "#e67e22");
      return;
    }

    mostrarMensaje("🔐 Datos confidenciales procesados", "#2196F3");
    formConf.reset();
    formConfidencial.style.display = "none";
    tercero.checked = false;
  });
});

// 🔹 Función de mensajes flotantes
function mostrarMensaje(texto, colorFondo = "#4CAF50") {
  const msg = document.createElement("div");
  msg.textContent = texto;
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = colorFondo;
  msg.style.color = "#fff";
  msg.style.padding = "12px 25px";
  msg.style.borderRadius = "8px";
  msg.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  msg.style.fontFamily = "Ubuntu, sans-serif";
  msg.style.fontSize = "16px";
  msg.style.zIndex = "9999";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 0.4s ease";

  document.body.appendChild(msg);

  setTimeout(() => (msg.style.opacity = "1"), 100);
  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 400);
  }, 2500);
}
