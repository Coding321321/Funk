const Discord = require('discord.js');
const fs = require('file-system');
const moment = require('moment');
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if(!coins[message.author.id + message.guild.id]){
      coins[message.author.id + message.guild.id] = {
          coins: 0
      };
  }


  var guildMoney = 0;
  var guildUsers = 0;
  var guildRichest = '';
  var guildRichestCoins = 0;

  for(var i in coins) {
    if(i.endsWith(message.guild.id)) {
      guildMoney += coins[i].coins;
      guildUsers += 1;
      if(coins[i].coins > guildRichestCoins) {
        guildRichestCoins = coins[i].coins;
        guildRichest = coins[i].username;
      }
    }
  }

  message.channel.send({embed: {
    title: "Global Stats",
    color: 0xF1C40F,
    fields:[{
      name: "Accounts",
      value: guildUsers,
      inline: true
    },
    {
      name: "Total Money",
      value: guildMoney,
      inline: true
    },
    {
      name: "Richest User",
      value: `${guildRichest} with ${guildRichestCoins}`,
      inline: true
    }
  ]
  }});
}


module.exports.help = {
  name: 'server'
}
