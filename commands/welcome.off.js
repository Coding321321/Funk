const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  let wChannel = message.guild.channels.find(`name`, "welcome");
  wChannel.delete();
}


module.exports.help = {
  name: 'welcome.off'
}
