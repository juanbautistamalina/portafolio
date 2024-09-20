// Función para redirigir a los repositorios de GitHub
function openGitHubRepo(projectName) {
    let repoUrls = {
        "Smartwatch": "https://github.com/juanbautistamalina/smartwatch",
        "Página de Producto": "https://github.com/juanbautistamalina/product-page",
        "Reproductor de Música": "https://github.com/juanbautistamalina/music-player",
        "Web de Perros": "https://github.com/juanbautistamalina/perros-a-la-vista",
        "Landing Page Running": "https://github.com/juanbautistamalina/freeCodeCamp-responsive-web-design-projects/tree/main/Landing%20Page",
        "Web de Gimnasio": "https://github.com/juanbautistamalina/Gimnasio-Forte",
        "To Do List": "https://github.com/juanbautistamalina/to-do-list",
        "Notas App": "https://github.com/juanbautistamalina/notes-app",
        "Clima App": "https://github.com/juanbautistamalina/weather-app",
        "Generador de Contraseñas": "https://github.com/juanbautistamalina/password-generator"
    };

    if (repoUrls.hasOwnProperty(projectName)) {
        window.open(repoUrls[projectName], "_blank"); // Abre en una nueva pestaña
    } else {
        alert("El repositorio para este proyecto no está disponible."); // Mensaje por si no se encuentra el proyecto
    }
}

// Obtener todos los botones de proyecto y agregar el evento click
document.addEventListener("DOMContentLoaded", function() {
    let projectButtons = document.querySelectorAll('#portfolio button');
    
    projectButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let projectName = button.querySelector("h4").innerText;
            openGitHubRepo(projectName);
        });
    });
});