module.exports = {
    config: {
        name: "say",
        description: "envia uma mensagem que foi inserida em um canal",
        usage: "!say",
        category: "moderation",
        accessableby: "Staff",
        aliases: ["acc", "announcement"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission([])) return message.channel.send("Você é corno!")
    
    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }

    }
}