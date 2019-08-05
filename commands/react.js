const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

     message.react("👍")
     message.react("👎")



}



module.exports.help = {
    name: "poll",
    usage: "poll <poll text>"
}
