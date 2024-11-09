// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebarcontent = document.getElementById("barcontent");

    
    // Add an event listener for the button click
    toggleBtn.addEventListener('click', function() {
        // Check if the sidebar is collapsed
        if (sidebar.classList.contains('collapsed')) {
            // If collapsed, show the sidebar content and remove the 'collapsed' class
            sidebar.classList.remove('collapsed');
            sidebarcontent.style.display = 'block';  // Show the sidebar content
        } else {
            // If not collapsed, hide the sidebar content and add the 'collapsed' class
            sidebar.classList.add('collapsed');
            sidebarcontent.style.display = 'none';  // Hide the sidebar content
        }
    });
});

const playButton = document.getElementById("play");

    playButton.addEventListener("click", function() {
        if (playButton.textContent === "||") {
            // Change to '>|' (play)
            playButton.textContent = ">|";
        } else {
            // Change to '||' (pause)
            playButton.textContent = "||";
    }
});

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    console.log("Día seleccionado:", day);
    console.log("Hora seleccionada:", time);

    // Verificar si los campos están vacíos
    if (day === "" || time === "") {
        alert("Please, select day and hour.");
    } else {
        // Lógica adicional si los campos están correctamente seleccionados
        const calendarTable = document.getElementById("Calendar");

        if (calendarTable) {
            console.log("Tabla de calendario encontrada");

            // Mapear los días seleccionados a los índices de las columnas
            const dayIndex = {
                "Monday": 1,
                "Tuesday": 2,
                "Wednesday": 3,
                "Thursday": 4,
                "Friday": 5,
                "Saturday": 6,
                "Sunday": 7
            }[day];

            // Mapear las horas seleccionadas a los índices de las filas
            const hourIndex = {
                "08:00": 2,
                "09:00": 3,
                "10:00": 4,
                "11:00": 5,
                "12:00": 6,
                "13:00": 7,
                "14:00": 8,
                "15:00": 9,
                "16:00": 10
            }[time];

            console.log("Índice de día:", dayIndex);
            console.log("Índice de hora:", hourIndex);

            // Acceder a la fila y celda correcta
            const row = calendarTable.rows[hourIndex]; // Obtener la fila basada en hourIndex
            if (row) {
                console.log("Fila encontrada:", row); // Mostrar la fila
                const cell = row.cells[dayIndex]; // Obtener la celda en la fila correspondiente

                if (cell) {
                    console.log("Celda encontrada:", cell); // Mostrar la celda

                    // Verificar si la celda está ocupada
                    if (cell.textContent.trim() === "Occupied") {
                        alert("This schedule is occupied.");
                    } else {
                        // Marcar la celda con el nombre del DJ y un color de fondo
                        cell.textContent = "DJ FELIBOX"; // Cambiar el texto
                        cell.style.backgroundColor = "lightgreen"; // Cambiar el color de fondo
                        cell.style.color = "black"; // Asegurarse de que el texto sea visible
                        console.log("La celda se ha marcado correctamente.");
                    }
                } else {
                    console.log("No se encontró la celda para la hora y día seleccionados.");
                }
            } else {
                console.log("No se encontró la fila para la hora seleccionada.");
            }
        } else {
            console.log("No se encontró la tabla de calendario.");
        }
    }
});




document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

    // Mostrar los valores de los campos en consola para verificar
    console.log("Día seleccionado: " + day);
    console.log("Hora seleccionada: " + time);

    // Verificar si los campos están vacíos
    if (day === "" || time === "") {
        alert("Por favor, seleccione tanto el día como la hora."); // Mostrar alerta si algún campo está vacío
    } else {
        // Si ambos campos están seleccionados, puedes proceder con la lógica que quieras
        alert("Formulario enviado correctamente!");
        // Si quisieras enviar el formulario, puedes usar:
        // document.getElementById("search-form").submit();
    }
}); 