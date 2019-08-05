const Discord = require('discord.js');
const index = require("../index.js");
const prefix = index.prefix;

module.exports.run = async (bot, message, args) => {

    const Verifyembed2 = new Discord.RichEmbed()
    .setColor("#04ff00")
    .setTitle('Verify')
    .setDescription(`:white_check_mark: you have verified yourself. :white_check_mark:`)
    .setFooter("Funk. By: cf#0010");


        if (message.channel.name = "verify") {

                const verifyRole = message.guild.roles.find(`name`, "Verified");
                message.member.addRole(verifyRole)
                message.channel.send(Verifyembed2);
                console.log(message.author.username, "Verified");


        } // !verify
}



module.exports.help = {
    name: "verify",
    aliases: ["ver"]
}
