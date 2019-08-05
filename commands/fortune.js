const Discord = require('discord.js');

let config = require('../botconfig.json');

let purple = config.purple;



module.exports.run = async (bot, message, args) => {
    let replies = [
        "You will die today",
        "You will breath today",
        "You will get a gf today",
        "You will become straight today",
        "Your parents are gonna love you today",
        "You will be returned to the adoption center today",
        "Your dad will hit you today",
        "Your grandpa is gonna die today",
        "Your gonna have a heart attack today",
        "Your gonna get bullied in school today",
        "Your gonna go back to kindergarten today",
        "Your gonna burn today",
        "Your mom is gonna die today",
        "Your gonna get shot today"
    ]
    let result = Math.floor((Math.random() * replies.length));
    let bicon = bot.user.displayAvatarURL;
    let fortuneEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(purple)
    .setDescription(replies[result])
    .setFooter("Funk. By: cf#0010", bicon)

    message.channel.send(fortuneEmbed);

};


module.exports.help = {
    name: "fortune"
}
