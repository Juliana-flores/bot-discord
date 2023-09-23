const { SlashCommandBuilder } = require("discord.js")

module.exports = {
//instaciar a classe com alguns atributos
  data: new SlashCommandBuilder()
    .setName("ping") //nome do comando
    .setDescription("Responde com 'Pong!'"),

  async execute(interaction) {
    await interaction.reply("pong!")
  }
}