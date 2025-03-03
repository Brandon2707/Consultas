document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username === username && u.password === password);

  if (!user) {
      alert("Usuario o contraseña incorrectos.");
      return;
  }

  alert("Inicio de sesión exitoso.");
  if (user.role === "admin") {
      window.location.href = "estadisticas.html";
  } else {
      window.location.href = "consulta.html";
  }
});