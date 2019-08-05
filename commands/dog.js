const discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Doggo :dog:")
    .setImage(body.url)
    .setFooter(`Funk. By: cf#0010`, bicon);

    message.channel.send(dogembed);
}


module.exports.help = {
    name: "doggo"
}
