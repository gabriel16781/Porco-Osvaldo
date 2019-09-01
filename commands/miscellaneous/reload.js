module.exports = {
    config: {
        name: "reload",
        description: "reloads a bot command!",
        usage: "!reload",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["creload"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "243106336416595978") return message.channel.send("Você não é o dono vaza rsrs!!!")

    if(!args[0]) return message.channel.send("Forneça um comando para recarregar!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)] // use $reload <name>
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Não foi possível recarregar: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`O Comando \`${args[0].toUpperCase()}\` foi recarregado!`)

    }
}