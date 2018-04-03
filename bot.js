const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "o co chodzi") {
        message.channel.sendMessage("Chodzi o kutasa");
    }
});

client.login(process.env.BOT_TOKEN);
