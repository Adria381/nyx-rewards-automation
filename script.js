document.getElementById('start-btn').addEventListener('click', function() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if (!user || !pass) {
        alert('Por favor ingresa tu usuario y contraseña.');
        return;
    }

    // Mostrar pantalla de carga
    document.getElementById('loading-screen').style.display = 'block';

    // Simular búsqueda automática después de cargar el archivo
    setTimeout(function() {
        // Cargar el archivo de búsqueda
        fetch('busqueda.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo.');
                }
                return response.text();
            })
            .then(data => {
                // Procesar los datos de búsqueda
                document.getElementById('loading-screen').style.display = 'none';
                
                // Simulamos la búsqueda automática
                var missions = data.split('\n');
                var results = [];

                missions.forEach(mission => {
                    // Aquí puedes añadir lógica adicional para manejar cada misión
                    results.push('Buscando: ' + mission.trim());
                });

                // Mostrar los resultados
                document.getElementById('result').innerText = 'Búsqueda completada. Resultados:\n' + results.join('\n');
            })
            .catch(error => {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('result').innerText = 'Error: ' + error.message;
            });
    }, 3000);  // Simula un retraso de 3 segundos
});
