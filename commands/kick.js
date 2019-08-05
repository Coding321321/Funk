const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRAITOR")) return message.channel.send("You don't have permission to preform this command!")
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    try {
        await kUser.send(`You have been kicked from ${message.guild.name} Reason: ${kreason}`)
    } catch (e) {
        message.channel.send(`${kUser} just got kicked. We tried to DM them, but their DMs are locked.`)
    }
    let bicon = bot.user.displayAvatarURL;
    let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Tiime", message.createdAt)
        .addField("Reason", kReason)
        .setFooter("Funk. By: cf#0010", bicon);


    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if (!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);


}

module.exports.help = {
    name: "kick"
}
