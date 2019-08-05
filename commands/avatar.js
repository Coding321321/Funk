const Discord = require('discord.js');
let index = require('../index.js');
let pink = index.pink;



module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let aicon = message.author.displayAvatarURL;
  let aEmbed = new Discord.RichEmbed()
  .setTitle("Avatar")
  .setImage(aicon)
  .setFooter("Funk. By: cf#0010", bicon);


  message.channel.send(aEmbed);
};


module.exports.help = {
name: 'avatar'
}
