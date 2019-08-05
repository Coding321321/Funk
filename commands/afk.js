const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let reason = args.join(" ");
  if(!reason) return message.reply("Please specify a reason!");
  let afklist = bot.afk.get(message.author.id);

  if(!afklist) {
    let construct = {
      id: message.author.id,
      reason: reason
  };








  bot.afk.set(message.author.id, construct);
  return message.reply(`You have been set to afk for reason: ${reason}`).then(msg => msg.delete(5000));
} else {
  bot.afk.delete(message.author.id);
};
  return message.reply("You have been removed from afk").then(msg => msg.delete(5000));
}


module.exports.help = {
  name: 'afk',
  aliases: ["AFK", "Afk"]
}
