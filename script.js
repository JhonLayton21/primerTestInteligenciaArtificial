// script.js
function generateResponse() {
    const userInput = document.getElementById('user-input').value;
    fetch('/api/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('ai-response').innerText = data.response;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
