document.getElementById('user-input-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send the data to your server
    fetch('https://0498-223-185-29-15.ngrok-free.app/process-user-input', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = `<pre>${data}</pre>`;
    })
    .catch(error => {
        document.getElementById('result').innerHTML = `<pre>Error: ${error}</pre>`;
    });
});