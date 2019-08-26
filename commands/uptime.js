const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos, `
    }

    message.channel.send(`Eu estou Online por: ${duration(bot.uptime)}`)

}


module.exports.config = {
    name: "uptime",
    description: "Displays the bots current uptime!",
    usage: "!uptime",
    accessableby: "Members",
    aliases: ["ut", "UP", "up", "UPTIME"]
}