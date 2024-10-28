// script.js

fetch('https://0498-223-185-29-15.ngrok-free.app/process-user-input', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
})
.then(data => {
    document.getElementById('result').innerHTML = `<pre>${data}</pre>`;
})
.catch(error => {
    document.getElementById('result').innerHTML = `<pre>Error: ${error.message}</pre>`;
});