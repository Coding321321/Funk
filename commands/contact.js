const Discord = require('discord.js');
const config = require('../botconfig');
const blue = config.blue;


module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  const cEmbed = new Discord.RichEmbed()
  .setColor(blue)
  .setDescription("Contact the owner with discord/youtube - Youtube: https://www.youtube.com/channel/UCaiWtcYJfcQIk3SpmLBVMvA?view_as=subscriber, Discord: cf#0010")
  .setFooter("Funk. By: cf#0010", bicon);
  message.channel.send(cEmbed);
}


module.exports.help = {
  name: 'contact'
}
