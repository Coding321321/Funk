const Discord = require('discord.js');
const fs = require('file-system');
const moment = require('moment');
let coins = require("../coins.json");
let config = require('../botconfig.json')
let lg = config.lightgreen;


module.exports.run = async (bot, message, args) => {
  if(!coins[message.author.id + message.guild.id]){
      coins[message.author.id + message.guild.id] = {
          coins: 0
      };
  }


  if(!coins[message.author.id + message.guild.id].lastDaily) coins[message.author.id].lastDaily = 'Not Collected';


  let uCoins = coins[message.author.id].coins;
  let bicon = bot.user.displayAvatarURL;
  let uicon = message.author.displayAvatarURL;



  if(bot.user.id === message.author.id) { return }



  message.channel.send({"embed":{
    title: "Bank",
    color: 0xF1C40F,
    fields:[{
      name: "Account Holder",
      value: message.author.username,
      inline: true
    },
    {
      name: "Account Balance",
      value: uCoins,
      inline: true
  }]
  }});
}

module.exports.help = {
  name: 'balance'
}
