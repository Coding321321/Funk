const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(`name`, 'Verified');
if (message.member.hasPermission("ADMINISTRATOR")) {
       let args = message.content.split(" ").slice(1).join(" ");
    let split = args.split("0");
    let url = args[2];
    let aEmbed = new Discord.RichEmbed()
    .setColor("0xFFFF00")
    .setAuthor(message.author.username)
    .setTitle("Announcement")
    .setDescription(split[0])
    .setURL(split[1])
    .setTimestamp(new Date())
    .setFooter(message.author.username);
    message.delete();
    message.channel.send(aEmbed);
    }
  }

module.exports.help = {
  name: "announce"
}
