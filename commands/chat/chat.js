const { SlashCommandBuilder } = require('discord.js');
const { getResponseFromBackend } = require('../../backend.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('Chat with a golem'),
	async execute(interaction) {
		const response = await getResponseFromBackend('hello how are you');
		await interaction.reply(response);
	},
};


// curl -X POST "http://localhost:8000/api/chat" -H "Content-Type: application/json" -d "{\"content\":\"hello\"}"
