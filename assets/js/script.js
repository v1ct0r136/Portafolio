// Espera a que el documento esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Usamos fetch para cargar el archivo data.json
    fetch('../data/datos.json')
        .then(response => response.json())  // Convertir la respuesta en formato JSON
        .then(data => {
            const proyectosContainer = document.querySelector('.proyectos');  // Selecciona el contenedor de los proyectos

            // Itera sobre los proyectos en el JSON y crea los elementos dinámicamente
            data.proyectos.forEach(proyecto => {
                // Crear un nuevo div para cada proyecto
                const proyectoDiv = document.createElement('div');
                proyectoDiv.classList.add('rounded-lg', 'p-4', 'bg-gray-950');

                // Insertar contenido HTML dentro del div creado
                proyectoDiv.innerHTML = `
                    <a href="${proyecto.enlace}" class="text-green-500 hover:underline">${proyecto.nombre}</a>
                    <h2 class="text-xl font-bold mb-2">${proyecto.fecha}</h2>
                    <p class="text-gray-600">${proyecto.descripcion}</p>
                `;

                // Agregar el div al contenedor de proyectos
                proyectosContainer.appendChild(proyectoDiv);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));  // Manejo de errores
});
