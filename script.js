document.getElementById('start-btn').addEventListener('click', function () {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // Simular el inicio de sesión (puedes agregar tu lógica aquí)
    if (user === '' || pass === '') {
        alert('Por favor, ingresa tu usuario y contraseña.');
        return;
    }

    // Mostrar pantalla de carga
    document.getElementById('loading-screen').style.display = 'block';

    // Simulación de búsqueda después de "iniciar sesión"
    setTimeout(() => {
        // Cargar el archivo busqueda.txt
        fetch('busqueda.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el archivo.');
                }
                return response.text();
            })
            .then(data => {
                // Mostrar los resultados
                const lines = data.split('\n').filter(line => line.trim() !== ''); // Eliminar líneas vacías
                document.getElementById('result').innerText = 'Búsqueda completada. Resultados:\n' + lines.join('\n');
            })
            .catch(error => {
                document.getElementById('result').innerText = 'Error: ' + error.message;
            })
            .finally(() => {
                // Ocultar pantalla de carga
                document.getElementById('loading-screen').style.display = 'none';
            });
    }, 1000); // Simular un tiempo de espera para el inicio de sesión
});
