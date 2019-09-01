module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: "!ping",
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = [" Este é realmente o meu ping "," Está tudo bem? Não consigo olhar "," espero que não seja ruim"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(`${response}: Bot Latencia: \`${ping}\`, API Latencia: \`${Math.round(bot.ping)}\``)
    })
  }
}