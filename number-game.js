const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('number_guesser')
		.setDescription('Guess what number I am thinking'),
	async execute(interaction) {
		await interaction.reply('I am thinking of a number between 1 and 100, what is it?');
	},
};
