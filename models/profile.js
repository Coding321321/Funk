const mongoose = require('mongoose');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    userID: String,
    username: String,
    coins: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 1
    },
    boosters: [{ name: String, time: String }]
  });
}

module.exports = mongoose.model('Profile', profileSchema);
