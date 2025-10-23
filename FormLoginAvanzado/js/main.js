// Archivo: js/enviar.js
// Simula el envío y reinicia los formularios automáticamente

document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los formularios en la página
  const formularios = document.querySelectorAll("form");

  formularios.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault(); // Evita el envío real

      const nombre = form.getAttribute("name") || "Formulario";

      // Muestra un mensaje de éxito
      mostrarMensaje(`${nombre} enviado correctamente ✅`);

      // Limpia los campos
      form.reset();

      // Desactiva temporalmente el botón de envío
      const boton = form.querySelector('input[type="submit"], button[type="submit"]');
      if (boton) {
        boton.disabled = true;
        const textoOriginal = boton.value;
        boton.value = "Enviando datos...";
        setTimeout(() => {
          boton.disabled = false;
          boton.value = textoOriginal;
        }, 2000);
      }
    });
  });
});

// Muestra un mensaje flotante bonito al enviar
function mostrarMensaje(texto) {
  const msg = document.createElement("div");
  msg.textContent = texto;
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#4CAF50";
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

  setTimeout(() => { msg.style.opacity = "1"; }, 100);
  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 400);
  }, 2500);
}
