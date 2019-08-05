const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;let bicon = bot.user.displayAvatarURL;
    let biccon = bot.user.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Region", message.guild.region, true)
        .addField("Created On", message.guild.createdAt, true)
        .addField("You Joined", message.member.joinedAt, true)
        .setFooter("Funk. By: cf#0010", biccon);

    message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverstats"
}
