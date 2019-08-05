module.exports = (bot, message, args, member) => {

let userlogs = member.guild.channels.find(c => c.name === 'logs');
  const newProfile = {
    guildID: member.guild.id,
    guildname: member.guild.name,
    userID: member.id,
    username: member.user.tag
  };

  try {
    await bot.createProfile(newProfile);
  } catch(err) {
    if(err) console.error(err);
  }


  userlogs.send(`${member.user.tag} has joined **${member.guild}**!`);
};
