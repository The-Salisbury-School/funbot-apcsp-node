const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const row = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId('primary')
			.setLabel('Click me!')
			// .setDisabled(true)
			.setStyle(ButtonStyle.Primary),
	);

const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Jeff Scrungle`s Code')
	.setURL('https://discord.js.org')
	.setDescription('jeff scrungles is in your home get him out get him ou');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Send a button!'),

	async execute(interaction) {
		const lobbyName = interaction.options.getString('lobby-name');
		const gameType = interaction.options.getString('game-type');
		const numberOfPlayers = interaction.options.getString('number-of-players');
		const gameLength = interaction.options.getString('game-length');
		await interaction.reply(
			{ content: await interaction.reply(`Your lobby name is **${lobbyName}**, the game type is **${gameType}**, there's  **${numberOfPlayers}** players, and your game is **${gameLength}** long. \n, Tell your friends to join the**${lobbyName} lobby. And have fun!`),
			},
		);
	},
};
