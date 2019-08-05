const Discord = require('discord.js');
let config = require('../botconfig.json');
let red = config.red;



module.exports.run = async (bot, message, args) => {
  let replies = [
      "Your gonna get ran over",
      "Your gonna get stabbed",
      "Your gonna get shot",
      "Your Grandma will kill you",
      "Your gonna stroke to death",
      "Your gonna burn to death",
      "It's gonna be so cold that you die",
      "Your mom is gonna kill you because you got suspended from school"
    ];
  let result = Math.floor((Math.random() * replies.length));
  let bicon = bot.user.displayAvatarURL;
  let deathEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor(red)
  .setDescription(replies[result])
  .setFooter("Funk. By: cf#0010", bicon);

  message.channel.send(deathEmbed);

};


module.exports.help = {
  name: 'death'
}
