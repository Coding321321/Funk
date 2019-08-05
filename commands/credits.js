const Discord = require('discord.js');
let config = require('../botconfig.json');
let cyan = config.cyan;



module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let cEmbed = new Discord.RichEmbed()
  .setColor(cyan)
  .setTitle("Credits:")
  .setDescription("Creator: cf#0010")
  .addField("Logo Maker:", "FridayBlox#4386")
  .setFooter("Funk. By: cf#0010", bicon)


  message.channel.send(cEmbed);
}



module.exports.help = {
  name: 'credits'
}
