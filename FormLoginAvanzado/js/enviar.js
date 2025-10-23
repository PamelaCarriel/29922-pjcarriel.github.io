// Archivo: js/main.js
// Controla el cambio entre las pestañas (Login y Registro)

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contenidoTabs = document.querySelectorAll(".contenido-tab > div");

  // Mostrar solo el primer formulario por defecto
  contenidoTabs.forEach((ct, i) => {
    ct.style.display = i === 0 ? "block" : "none";
    ct.style.opacity = i === 0 ? "1" : "0";
    ct.style.transition = "opacity 0.5s ease";
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();

      // Quitar la clase activa de todas las pestañas
      tabs.forEach(t => t.classList.remove("active"));

      // Agregar clase activa a la pestaña actual
      tab.classList.add("active");

      // Ocultar todos los formularios
      contenidoTabs.forEach(ct => {
        ct.style.opacity = "0";
        setTimeout(() => ct.style.display = "none", 400);
      });

      // Mostrar el formulario correspondiente
      const id = tab.querySelector("a").getAttribute("href");
      const mostrar = document.querySelector(id);
      setTimeout(() => {
        mostrar.style.display = "block";
        setTimeout(() => mostrar.style.opacity = "1", 50);
      }, 400);
    });
  });
});
