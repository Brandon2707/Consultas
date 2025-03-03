document.getElementById("role").addEventListener("change", function() {
    let adminPasswordContainer = document.getElementById("adminPasswordContainer");
    adminPasswordContainer.style.display = (this.value === "admin") ? "block" : "none";
});

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    let role = document.getElementById("role").value;
    let adminPassword = document.getElementById("adminPassword").value;

    if (role === "admin" && adminPassword !== "1234") {
        alert("Contraseña de administrador incorrecta.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
});