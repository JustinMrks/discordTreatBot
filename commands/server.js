const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Provides server info'),
  async execute(int) {
    await int.reply(
      `This server is ${int.guild.name}, and has ${int.guild.memberCount} members.`
    );
  },
};
