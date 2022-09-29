const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => {
	console.log('Ready!');
});
client.login(token);


client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	

	const { commandName } = interaction;

	if (commandName === 'number') {
		await interaction.reply('What number am I thinking of? 1-100');
		randomNum === Math.floor(Math.random() * max)
	} 

	if (interaction === num) {
		return ('Correct');
	}
	else
	{
		return ('No')
	}

});