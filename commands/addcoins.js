const Discord = require("discord.js");
const fs = require('file-system');
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to do that")
    //!setcoins
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Please specify a user.");
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;
    coins[rMember].coins = args[0];


}
module.exports.help = {
    name: "setcoins"
}
