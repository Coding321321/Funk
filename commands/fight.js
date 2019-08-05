const Discord = require('discord.js');
let config = require('../botconfig.json');
let red = config.red;




module.exports.run = async (bot, message, args) => {
  let fUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!fUser) return message.reply('Can\'t find user!');
  let replies = [
  `${fUser} has won!!!!!!!!!`,
  `${message.author.username} has won!!!!!!!!!`,
];

let result = Math.floor((Math.random() * replies.length));

let bicon = bot.user.displayAvatarURL;
let fEmbed = new Discord.RichEmbed()
.setColor(red)
.setDescription(replies[result])
.setFooter("Funk. By: cf#0010", bicon);

message.channel.send(fEmbed)
}


module.exports.help = {
  name: 'fight'
}
