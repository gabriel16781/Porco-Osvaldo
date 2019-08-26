const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor(colours.red_light)
    .setTitle("Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Nome:**", `${message.author.username}`, true)
    .addField("**#:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Data De Criação:**", `${message.author.createdAt}`, true)
    .setFooter(`Porco Osvaldo | Lindo`, bot.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself or a user!",
    usage: "!userinfo (@mention)",
    accessableby: "Members",
    aliases: ["ui"]
}
