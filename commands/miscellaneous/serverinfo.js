const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "serverinfo",
        description: "Pulls the serverinfo of the guild!",
        usage: "!serverinfo",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["si", "serverdesc"]
    },
    run: async (bot, message, args) => {
    let sEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Server Nome:**", `${message.guild.name}`, true)
        .addField("**Dono Corno:**", `${message.guild.owner}`, true)
        .addField("**Quantidade De Cornos:**", `${message.guild.members.size}`, true)
        .addField("**Cargos:**", `${message.guild.roles.size}`, true)
        .setFooter(`PorcoOsvaldo | Lindo`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}