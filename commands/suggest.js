const Discord = require('discord.js');
let config = require('../botconfig.json');
let purple = config.purple;


module.exports.run = async (bot, message, args) => {
  let suggestion = args[0];
  if(!suggestion) return message.reply("Please type a suggestion");
  let bicon = bot.user.displayAvatarURL;
  if(message.channel.type === "dm") return;
  if(message.author.type === "bot") return;
  if(message.author.id === `${message.guild.owner.id}`) {
    let sEmbed = new Discord.RichEmbed()
    .setTitle("Suggestion")
    .setColor(purple)
    .setDescription(`By: ${message.author}`)
    .addField("Suggestion", `${suggestion}`)
    .setFooter("Funk. By: cf#0010", bicon)
    message.author.send(sEmbed);
  }
}


module.exports.help = {
  name: 'suggest'
}
