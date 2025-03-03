import { getData, postData, putData } from './api.js';

const consultaForm = document.getElementById('consultaForm');
const listaConsultas = document.getElementById('listaConsultas');

// Función para cargar y mostrar las consultas
async function cargarConsultas() {
  const consultas = await getData("consultas");
  listaConsultas.innerHTML = "";
  consultas.forEach(consulta => {
    const li = document.createElement('li');
    li.innerText = `${consulta.nombre} - ${consulta.consulta} (${consulta.hora}) `;
    
    // Botón para marcar la consulta como atendida
    const btnAtender = document.createElement('button');
    btnAtender.innerText = "Atendido";
    btnAtender.addEventListener('click', async () => {

      consulta.atendido = true;
      await putData("consultas", consulta.id, consulta);
      cargarConsultas();
    });
    
    li.appendChild(btnAtender);
    listaConsultas.appendChild(li);
  });
}


consultaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputConsulta = document.getElementById('consulta');
  const nuevaConsulta = {
    nombre: "Usuario", 
    consulta: inputConsulta.value,
    hora: new Date().toLocaleTimeString(),
    atendido: false
  };
  await postData("consultas", nuevaConsulta);
  inputConsulta.value = "";
  cargarConsultas();
});


cargarConsultas();

(Event.preventDefault())
(consultaInput.value = "")
document.addEventListener("DOMContentLoaded", function () {
  fetch("/users")
      .then(response => response.json())
      .then(users => {
          const usersContainer = document.getElementById("users-list");
          usersContainer.innerHTML = "";

          users.forEach(user => {
              const userItem = document.createElement("li");
              userItem.textContent = `${user.name} - ${user.email} `;
              usersContainer.appendChild(userItem);
          });
      })
      .catch(error => console.error("Error al obtener usuarios:", error));
});