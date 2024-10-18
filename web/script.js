document.getElementById('start-btn').addEventListener('click', function() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if (!user || !pass) {
        alert('Por favor ingresa tu usuario y contraseña.');
        return;
    }

    // Mostrar pantalla de carga
    document.getElementById('loading-screen').style.display = 'block';

    // Simular búsqueda automática
    setTimeout(function() {
        // Aquí podrías añadir la lógica real si fuera necesario
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('result').innerText = 'Búsqueda completada. ¡Éxito!';
    }, 3000);  // Simula un retraso de 3 segundos
});
