const saludo = document.getElementById("saludar");
const hora = new Date().getHours();

if (hora < 11) {
    saludo.textContent = "Buenos días";
} else if (hora < 17) {
    saludo.textContent = "Buenas tardes";
} else {
    saludo.textContent = "Buenas noches";
}

function ocultarEducation() {
    const educacion = document.getElementById("educacion");
    educacion.style.display = educacion.style.display === "none" ? "block" : "none";
}