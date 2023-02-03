const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('pings server and replies with pong'),
  async execute(interaction) {
    await interaction.reply('pong');
  },
};
