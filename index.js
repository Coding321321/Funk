let permlvl = 0;
const OWNER = process.env.OWNER;
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("file-system");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let purple = botconfig.purple;
const mongoose = require('mongoose');
const profanities = require('profanities');
const chalk = require('chalk');
let token = "NTU3OTY4MDA5NDg3MDU2OTA2.XUdIbg.OKxrV2mP3MGaiT_2zS_EwM7m1z8";
const firebase = require('firebase');
const firebaseadmin = require('firebase-admin');
const fieldValue = require('firebase-admin').firestore.FieldValue;
let yellow = botconfig.yellow;
let pink = botconfig.pink;
let red = botconfig.red;
let cyan = botconfig.cyan;


const enmap = require('enmap');




let owner = botconfig.owner;












bot.afk = new Map();






bot.on("message", message => {
  if(message.content.includes(message.mentions.users.first())) {
    bot.afk.forEach(key => {
      if(key.id === message.mentions.users.first().id) {
        message.guild.fetchMember(key.id).then(member => {
            let user_tag = member.user.tag;
            return message.channel.send(`**${user_tag}** is currently afk. Reason: ${key.reason}`);
        });
      }
    });
  }

  bot.afk.forEach(key => {
      if(message.author.id === key.id) {
        bot.afk.delete(message.author.id);
        return message.reply("You have been removed from afk").then(msg => msg.delete(5000));
      ;}
  });
});

//// TODO: For the afk command.














let prefix = botconfig.prefix;
/* let cooldown = new Set();
 let cdseconds = 5;
 Don't need those :)
*/

var musicUrls = [];







bot.elevation = message => {
    /* This function should resolve to an ELEVATION level which
       is then sent to the command handler for verification*/
    let permlvl = 0;
    let ha_role = message.guild.roles.find(`name`, "Head Administraitor")
    if (ha_role && message.member.roles.has(ha_role.id)) permlvl = 4;
    let bm_role = message.guild.roles.find(`name`, "@Bot Manager");
    if (bm_role && message.member.roles.has(bm_role.id)) permlvl = 6;
    if (message.author.id === settings.ownerid) permlvl = 30;
    return permlvl;
};





fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn\'t find command");
        return;
    }
    //// TODO: finding the commands folder
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});





bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("In cf's basement", { type: "PLAYING" });
});


//// TODO: start the bot








bot.on("guildMemberAdd", async member => {
    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    var memberrole = member.guild.roles.find(`name`, "Member")
    if (!memberrole) {
memberrole = await message.guild.createRole({
    name: "Member",
    color: "#b12a2a",
    permissions: []

});
    }
    if(!memberrole){
    message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(memberrole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        });
    });
    try{
    }catch(e){
      console.log(e.stack);
    if (!welcomechannel) return console.log("Can't find welcome channel");
     }
    }
});


//// TODO: says when a player joined the guild in the welcome channel






bot.on("guildMemberBan", member => {
  let welcomechannel = member.guild.channels.find(`name`, "logs");

  welcomechannel.send(`${member} just got banned!`);
});



//// TODO: tells when a player is banned

bot.on('guildMemberRemove', async member => {
    let welcomechannel = member.guild.channels.find(`name`, "welcome");

    welcomechannel.send(`${member} just left the server Hope you come back :cry:`);
});




bot.on('guildMemberAdd', async member => {
    let welcomechannel = member.guild.channels.find(`name`, "welcome");

    welcomechannel.send(`${member} just Joined the server Hope you enjoy!`);
});















//// TODO: Say in logs when a channel is deleted.



bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }





    let coinAmt = Math.floor(Math.random() * 15) + 1;
    let baseAmt = Math.floor(Math.random() * 15) + 1;
    console.log(`${coinAmt} ; ${baseAmt}`);

    if (coinAmt === baseAmt) {
        coins[message.author.id] = {
            coins: coins[message.author.id].coins + coinAmt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
            if (err) console.log(err)
        });
        let coinEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#0000FF")
            .addField("💸", `${coinAmt} coins added!`);

        message.channel.send(coinEmbed).then(msg => { msg.delete(5000) });
    }





    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    ////* TODO: you have to put async (bot, message, args) => {

  //// TODO: }
  //// TODO: for it to work

});

bot.login(token);
//// TODO: make the bot go online.
