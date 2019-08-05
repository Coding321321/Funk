const Discord = require('discord.js');
let config = require('../botconfig.json');
let purple = config.purple;

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let dEmbed = new Discord.RichEmbed()
  .setColor(purple)
  .setDescription("Want the discord to help me test the bot? use this invite link!   -              https://discord.gg/yrseMZa")
  .setFooter("Funk. By: cf#0010", bicon);


  message.channel.send(dEmbed);
}


module.exports.help = {
  name: 'discord'
}
