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

function ocultarInformacion() {
    const informacion = document.getElementById("informacion");
    informacion.style.display = informacion.style.display === "none" ? "block" : "none";
}

function modoOscuro() {
    document.body.classList.toggle("oscuro");
}

function filtrarHabilidades() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const habilidades = document.querySelectorAll("li");

    habilidades.forEach(habilidad => {
        if (habilidad.textContent.toLowerCase().includes(texto)) {
            habilidad.style.display = "block";
        } else {
            habilidad.style.display = "none";
        }
    });
}