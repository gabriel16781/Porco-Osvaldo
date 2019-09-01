const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "userinfo",
        description: "Pulls the userinfo of yourself or a user!",
        usage: "!userinfo (@mention)",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ui"]
    },
    run: async (bot, message, args) => {
    let uEmbed = new RichEmbed()
        .setColor(red_light)
        .setTitle("IUser info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Usuario:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Registrado em:**", `${message.author.createdAt}`, true)
        .setFooter(`PorcoOsvaldo | Lindo`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
}
