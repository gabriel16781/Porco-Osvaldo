const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor(colours.cyan)
            .setAuthor(`Porco HELP`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Commandos:** ${command.config.name}\n**Descrição:** ${command.config.description || "Sem Descrição"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Commando!`, message.guild.iconURL)
        .setColor(colours.redlight)
        .setDescription(`${message.author.username} Olha o PV ai!!!`)

        let Sembed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setAuthor(`Porco Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Esses são alguns comandos do nosso Porquinho!\n\n O prefix é: ${prefix}`)
        .addField(`Commandos:`, "``cat`` ``dog`` ``meme`` ``help`` ``serverinfo`` ``userinfo``")
        .setFooter("Porco Osvaldo 2k19", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}


module.exports.config = {
    name: "info",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}