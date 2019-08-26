const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(colours.gold)

    .addField(`Comandos:`, "``cat`` ``dog`` ``uptime`` ``help`` ``serverinfo`` ``userinfo`` ``alpaca`` ``say`` ")
    .setFooter(`Porco Osvaldo | Lindo`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "comandos",
    description: "Esses são os comandos do Porquinho",
    usage: "!comandos",
    accessableby: "Members",
    aliases: ["c", "coman", "C", "COMANDOS" ]
}