const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  message.guild.createChannel("welcome");
}


module.exports.help = {
  name: 'welcome.on'
}
