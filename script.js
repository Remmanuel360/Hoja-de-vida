// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Define títulos y sus clases correspondientes
  const secciones = [
    { titulo: "Formación Académica", clase: "estudios" },
    { titulo: "Cursos Complementarios", clase: "complemento" },
    { titulo: "Experiencia Laboral", clase: "exp" }
  ];

  // Recorre cada sección definida
  secciones.forEach(({ titulo, clase }) => {
    // Busca el h2 que coincida con el texto del título
    const h2 = Array.from(document.querySelectorAll("h2")).find(h => h.textContent.trim() === titulo);
    // Busca el contenido asociado a la clase
    const contenido = document.querySelector(`.${clase}`);

    // Si existen ambos elementos
    if (h2 && contenido) {
      // Agrega clase para estilo interactivo (hover/cursor)
      h2.classList.add("interactivo");

      // Agrega evento de clic al título
      h2.addEventListener("click", () => {
        // Alterna visibilidad del contenido
        contenido.classList.toggle("mostrar");
      });
    }
  });
});

// Función para hacer scroll al inicio suavemente
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función que simula clic en subtítulo y hace scroll hacia él
function toggleSeccion(id) {
  const subtitulo = document.getElementById(id); // Busca el subtítulo por ID
  if (subtitulo) {
    subtitulo.click(); // Simula clic para mostrar/ocultar
    // Hace scroll hacia el subtítulo centrado
    subtitulo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}