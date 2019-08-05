const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let user2 = message.mentions.users.first() || message.guild.members.get(args[0]);

  if(!user) return message.channel.send("Please provide a user");

    let bicon = bot.user.displayAvatarURL;
    let uicon = user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(uicon)
        .setTitle(`${user} Info`)
        .setColor("#15f153")
        .addField("Username", user.username, true)
        .addField("User Id", user.id, true)
        .addField("Joined discord", user2.createdAt)
        .addField("Roles", user.roles.array(), true)
        .addField('Status', user.presence.status, true)
        .setFooter("Funk. By: cf#0010", bicon);
        message.channel.send(botembed);

}

module.exports.help = {
    name: "userinfo"
}
