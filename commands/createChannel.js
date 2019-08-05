const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  let channel = args[0];
  if(!channel) message.reply("Please specify a channel name!");

  message.guild.createChannel(channel);
}


module.exports.help = {
name: 'createchannel'
}
