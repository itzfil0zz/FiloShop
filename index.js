const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
})

client.on("ready", () => {
    console.log("Bot Avviato")
})

client.login("OTUwNDI2NTI2ODk2MjUwODgw.YiYvrg.T7h3Qxm_U0Tk4rdUtKgVTB79cxs")