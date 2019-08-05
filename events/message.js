const index = require('../index.js');

module.exports = async (bot, message, args) => {

  if(!message.guild) return;

  let settings;
  try {
    settings = await bot.getGuild(message.guild);
  } catch(err) {
    if (err) console.error(err);
  }

  if(message.author.bot) return;

  
}
