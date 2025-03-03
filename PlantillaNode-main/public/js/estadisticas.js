document.addEventListener("DOMContentLoaded", function () {
  fetch("/statistics")
      .then(response => response.json())
      .then(statistics => {
          const statsContainer = document.getElementById("statistics-list");
          statsContainer.innerHTML = "";

          statistics.forEach(stat => {
              const statItem = document.createElement("div");
              statItem.classList.add("stat-item");
              statItem.textContent = `${stat.title}: ${stat.value}% `;

              // Si está completada, agregar clase de color verde
              if (stat.completed) {
                  statItem.classList.add("completed");
              }

              // Evento para marcar como completada
              statItem.addEventListener("click", () => toggleCompletion(stat.id));

              statsContainer.appendChild(statItem);
          });
      })
      .catch(error => console.error("Error al obtener estadísticas:", error));
});

// Función para marcar estadísticas como completadas
function toggleCompletion(statId) {
  fetch(` /statistics/${statId}/complete`, { method: "PUT" })
      .then(response => response.json())
      .then(() => {
          location.reload(); // Recargar para ver cambios
      })
      .catch(error => console.error("Error al marcar completado:", error));
}