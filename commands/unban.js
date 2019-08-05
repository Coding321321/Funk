const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRAITOR")) return message.channel.send("You don't have permission to preform this command!");


    let bannedMember = await bot.fetchUser(args[0])
    if(!bannedMember) return message.channel.send("Please provide a user id to unban someone");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given!";

    if(!message.guild.me.hasPermission("ADMINISTRAITOR")) return message.channel.send("I Don't have permission to preform this command")
    message.delete()
    try{
        message.guild.unban(bannedMember, {reason: reason});
        message.channel.send(`${bannedMember} has been unbanned from the server/guild`);
    }catch(e) {
        console.log(e.message)
    }
    let bicon = bot.user.displayAvatarURL;
     let unbanEmbed = new Discord.RichEmbed()
         .setDescription("~Unban~")
         .setColor("#03fc0b")
         .addField("Unbanned User", `${bannedMember} with ID ${bannedMember.id}`)
         .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
         .addField("Unbanned In", message.channel)
         .addField("Time", message.createdAt)
         .addField("Reason", reason)
         .setFooter("Funk. By: cf#0010", bicon);

     let incidentchannel = message.guild.channels.find(`name`, "incidents");
     if (!incidentchannel) return message.channel.send("Can't find incidents channel.");

     incidentchannel.send(unbanEmbed);
}

module.exports.help = {
    name: 'unban',
    description: 'Unbans a player that is banned',
    Usage: '!unban <user> the user has to be banned to use this though'
}
