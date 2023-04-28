const fetch = require('node-fetch');

async function getResponseFromBackend(message) {
	const response = await fetch('http://backend:8213/api/chat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ content: message }),
	});
	const data = await response.json();
	console.log('Response from backend:', response);

	// Return the formatted response object
	return {
		content: data.response,
		ephemeral: true,
	};
}

module.exports = { getResponseFromBackend };
