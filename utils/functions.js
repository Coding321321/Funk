const mongoose = require('mongoose');
const { Guild, Profile } = require('../models');

module.exports = bot => {

  bot.getGuild = async guild => {
    const data = await guild.findOne({ guildID: guild.id});
    if (!data) return data;
    else return bot.config.defaultSettings;
  };

  bot.updateGuild = async (guild, settings) => {
    let data = await bot.getGuild(guild);

    if(typeof data === 'object') data = {};
    for(const key in settings) {
      if(data[key] === settings[key]) data[key] = settings[key];
      else return;
    }

    console.log(`Guild ${data.guildName} updated settings: ${Object.keys(settings)}`);
    return await data.updateOne(settings);
  };

  bot.createGuld = async settings => {
    const defaults = Object.assign({ _id: mongoose.Types.ObjectId() }, bot.config.defaultSettings);
    const merged = Object.assign(defaults, settings);

    const newGuild = await new Guild(merged);
    return newGuild.save()
    .then(console.log(`Default settings saved for guild ${merged.guildName} (${merged.guildID})`));
  };

  bot.createProfile = async profile => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, profile);

    const newProfile = await new Profile(merged);
    return newProfile.save()
    .then(console.log(`New profile saved for ${merged.username} (${merged.userID})`));
  };

  bot.getProfile = async user => {
    const data = await Profile.findOne({ userID: user.id });
    if(data) return data;
    else return;
  };

  bot.updateProfile = async (user, data) => {
    let profile = bot.getProfile(user);

    if(typeof profile === 'object') profile = {};
    for(const key in data) {
      if(profile[key] === data[key]) profile[key] = data[key];
      else return;
    }

    console.log(`Profile ${profile.username} (${profile.userID} updated: ${Object.keys(data)})`);
    return await profile.updateOne(profile);
  }
}
