// Función para redirigir a los repositorios de GitHub
function openGitHubRepo(projectName) {
    let repoUrls = {
        "To Do List": "https://github.com/juanbautistamalina/to-do-list",
        "Tarjetas Añadibles": "https://github.com/juanbautistamalina/card-builder",
        "Landing Page Running": "https://github.com/juanbautistamalina/freeCodeCamp-responsive-web-design-projects/tree/main/Landing%20Page",
        "Web de Gimnasio": "https://github.com/juanbautistamalina/Gimnasio-Forte",
        "Web de Homenaje": "https://github.com/juanbautistamalina/freeCodeCamp-responsive-web-design-projects/tree/main/Homenaje",
        "Encuesta de Desarrollo Personal": "https://github.com/juanbautistamalina/freeCodeCamp-responsive-web-design-projects/tree/main/Encuesta"
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