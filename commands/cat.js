const discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
        .get(`http://aws.random.cat/meow`);

    let catembed = new discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle("Cat :cat:")
        .setImage(body.file);

    message.channel.send(catembed);
}


module.exports.help = {
    name: "cat"
}