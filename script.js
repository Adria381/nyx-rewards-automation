document.getElementById('start-btn').addEventListener('click', function() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if (!user || !pass) {
        alert('Por favor ingresa tu usuario y contraseña.');
        return;
    }

    // Mostrar pantalla de carga
    document.getElementById('loading-screen').style.display = 'block';

    // Cargar el archivo de búsqueda
    fetch('busqueda.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo.');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('loading-screen').style.display = 'none';
            var missions = data.split('\n').map(m => m.trim()).filter(m => m); // Filtrar líneas vacías
            displayResults(missions);
        })
        .catch(error => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('result').innerText = 'Error: ' + error.message;
        });
});

function displayResults(missions) {
    var results = missions.map((mission, index) => `${index + 1}. ${mission}`).join('\n');
    document.getElementById('result').innerText = 'Búsqueda completada. Resultados:\n' + results;
}
