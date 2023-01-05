const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new-lobby')
		.setDescription('Create a lobby!')
	// eslint-disable-next-line no-mixed-spaces-and-tabs

		.addStringOption(option => option.setName('lobby-name').setDescription('Your Lobby\'s name?').setRequired(true))
		.addStringOption(option => option.setName('game-type').setDescription('Choose your game type!').setRequired(true)
			.addChoices(
				{ name: 'Game 1', value: 'Game 1' },
				{ name: 'Game 2', value: 'Game 2' },
			))
		.addStringOption(option => option.setName('number-of-players').setDescription('Choose the amount of players for this game!').setRequired(true)
			.addChoices(
				{ name: '2', value: '2' },
				{ name: '4', value: '4' },
				{ name: '6', value: '6' },
			))
		.addStringOption(option => option.setName('game-length').setDescription('Choose the length of the game!').setRequired(true)
			.addChoices(
				{ name: '5 Minutes', value: '5 minutes' },
				{ name: '10 Minutes', value: '10 minutes' },
				{ name: '15 Minutes', value: '15 minutes' },
			)),

	async execute(interaction) {
		const lobbyName = interaction.options.getString('lobby-name');
		const gameType = interaction.options.getString('game-type');
		const numberOfPlayers = interaction.options.getString('number-of-players');
		const gameLength = interaction.options.getString('game-length');
		// Make bot wait for lobbyname, game type etc.

		await interaction.reply(`Your lobby name is **${lobbyName}**, the game type is **${gameType}**, there's  **${numberOfPlayers}** players, and your game is **${gameLength}** long. \n, Tell your friends to join the**${lobbyName} lobby. And have fun!`);
	},
};