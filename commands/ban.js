const Discord = require("discord.js");
const errors = require("../utils/errors.js");


module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRAITOR")) return message.channel.send("You don't have permission to preform this command!")
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
    await bUser.send(`You have been banned from ${message.guild.name} reason: ${bReason}`);
    let bicon = bot.user.displayAvatarURL;
    let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#bc0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason)
        .setFooter("Funk. By: cf#0010", bicon);
    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if (!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    bUser.send(`You have been banned from ${message.guild.name} reason: ${bReason}`)
}

module.exports.help = {
    name: "ban"
}
