const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {



        let bicon = bot.user.displayAvatarURL;
        let Embed = new Discord.RichEmbed()
        .setTitle("Pong!")
        .setFooter("Funk. By: cf#0010", bicon);
        message.channel.send(Embed);
}


module.exports.help = {
    name: "ping"
}
