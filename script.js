const saludo = document.getElementById("saludar");
const hora = new Date().getHours();

if (hora < 12) {
    saludo.textContent = "Buenos días";
} else if (hora < 18) {
    saludo.textContent = "Buenas tardes";
} else {
    saludo.textContent = "Buenas noches";
}