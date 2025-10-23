// Archivo: js/producto.js
// Control del formulario de producto (mostrar campos, validar y enviar)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms["FormProducto"];
  const checkbox = document.getElementById("Basico4");
  const datosEcon = document.getElementById("Datos_Economicos");

  // 🔹 Mostrar / ocultar los datos económicos
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      datosEcon.classList.remove("hidden");
      datosEcon.classList.add("visible");
    } else {
      datosEcon.classList.remove("visible");
      datosEcon.classList.add("hidden");
    }
  });

  // 🔹 Validar y simular envío
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real (no hay base de datos)

    // Validaciones básicas
    const nombre = document.getElementById("Basico1").value.trim();
    const descripcion = document.getElementById("Basico2").value.trim();
    const foto = document.getElementById("Basico3").value;

    if (nombre === "" || descripcion === "" || foto === "") {
      mostrarMensaje("⚠️ Por favor, complete todos los campos obligatorios.", "#e74c3c");
      return;
    }

    if (checkbox.checked) {
      const precio = document.getElementById("Económico1").value;
      if (precio === "" || precio < 100 || precio > 200) {
        mostrarMensaje("⚠️ El precio debe estar entre 100 y 200 dólares.", "#e67e22");
        return;
      }
    }

    // Mostrar mensaje de éxito
    mostrarMensaje("✅ Datos guardados correctamente.", "#4CAF50");

    // Reiniciar formulario
    form.reset();
    datosEcon.classList.remove("visible");
    datosEcon.classList.add("hidden");
  });
});

// 🔹 Función para mostrar mensaje flotante
function mostrarMensaje(texto, colorFondo = "#4CAF50") {
  const msg = document.createElement("div");
  msg.textContent = texto;
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = colorFondo;
  msg.style.color = "#fff";
  msg.style.padding = "15px 25px";
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
