const fetch = require('node-fetch');

async function getResponseFromBackend(message) {
	const response = await fetch('http://localhost:8000/api/chat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ content: message }),
	});
	const data = await response.json();
	console.log('Response from backend:', response);
	return data.response;
}

module.exports = { getResponseFromBackend };
