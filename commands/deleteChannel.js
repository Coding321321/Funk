const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  let channel = args[0];
  if(!channel) message.reply("Please specify a channel name!");
  let dChannel = message.guild.channels.find(`name`, args[0]);

  dChannel.delete()
}


module.exports.help = {
name: 'deletechannel'
}
