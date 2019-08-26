const { RichEmbed } = require("discord.js")
const { cyan } = require("../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "ilama",
        description: "Mostramos uma imagem aleatoria de uma ilama!",
        usage: "",
        category: "images",
        accessableby: "Members",
        aliases: ["ilhama", "ILAMA"]
    },
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Gerando...")

        fetch("https://apis.duncte123.me/llama")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops.Parece que não esta funcinando !")

            let embed = new RichEmbed()
            .setColor(cyan)
            .setAuthor(`${bot.user.username} Ilama!`, message.guild.iconURL)
            .setImage(body.data.file)
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                msg.edit(embed)
        })
    }
}