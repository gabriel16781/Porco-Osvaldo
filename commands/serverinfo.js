const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.cyan)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Nome Servidor:**", `${message.guild.name}`, true)
    .addField("**Dono Corno:**", `${message.guild.owner}`, true)
    .addField("**Quantidade De Cornos:**", `${message.guild.memberCount}`, true)
    .addField("**Cargos:**", `${message.guild.size}`, true)
    .setFooter(`Porco Osvaldo | Lindo`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["sio", "serverdesc"]
}