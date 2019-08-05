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

  let uCoins = coins[message.author.id + message.guild.id].coins;

  if(!coins[message.author.id + message.guild.id].lastDaily) coins[message.author.id + message.guild.id].lastDaily = 'Not Collected';

  if(coins[message.author.id + message.guild.id].lastDaily != moment().format('L')) {
    coins[message.author.id + message.guild.id].lastDaily = moment().format('L');
    coins[message.author.id + message.guild.id].coins += 100;
    message.channel.send({embed: {
      title: "Daily Reward",
      description: "You got 100 coins added to your account!"
    }});
  } else {
    message.channel.send({embed:{
      title: "Daily Reward",
      description: "You already collected your daily reward! Collect your next reward in: " + moment().endOf('day').fromNow() + '.'
    }});
  }

}


module.exports.help = {
name: 'daily'
}
