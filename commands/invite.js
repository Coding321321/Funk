const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let iEmbed = new Discord.RichEmbed()
  .setColor('#009dff')
  .setDescription("Oh! you want to invite me to YOUR server? well you can -               https://discordapp.com/oauth2/authorize?client_id=557968009487056906&scope=bot&permissions=2146958847")
  .setFooter("Funk By: cf#0010", bicon);
  message.channel.send(iEmbed);
}


module.exports.help = {
  name: 'invite'
}
