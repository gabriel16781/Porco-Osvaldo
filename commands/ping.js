const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Isso é realmente meu ping "," Está tudo bem? Eu não consigo olhar "," espero que não seja ruim"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Bot Latencia: \`${ping}\`, API Latencia: \`${Math.round(bot.ping)}\``)
    })

}


module.exports.config = {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "!ping",
    accessableby: "Members",
    aliases: ["latency"]
}