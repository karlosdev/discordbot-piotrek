const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "o co chodzi") {
        message.channel.sendMessage("Chodzi o kutasa");
    }
});

bot.login(process.env.BOT_TOKEN);
