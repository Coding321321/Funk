const Discord = require('discord.js');
let config = require('../botconfig.json')
let red = config.red;
module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.reply("Please provide a user");

  let bicon = bot.user.displayAvatarURL;
  let killEmbed = new Discord.RichEmbed()
  .setColor(red)
  .setDescription(`:knife: I just killed ${kUser}. :knife:`)
  .setFooter("Funk by: cf#0010", bicon);

  message.channel.send(killEmbed);
}


module.exports.help = {
  name: 'kill'
}
