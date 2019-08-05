const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let yellow = botconfig.yellow;
let cyan = botconfig.cyan;
let pink = botconfig.pink;


module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor(pink)
        .setThumbnail(bicon)
        .addField("Bot Name", `${bot.user.username}`)
        .addField("Created On", `${bot.user.createdAt}`)
        .addField("Prefix", `${botconfig.prefix}`)
        .addField("Bot Commands:")
        .addField("f!kick @user",)
        .addField("f!ban @user")
        .addField("f!report @user")
        .addField("f!userinfo")
        .addField("f!removerole @user role")
        .addField("f!addrole @user role")
        .addField("f!poll")
        .addField("f!Doggo")
        .addField("f!Verify")
        .addField("f!cat")
        .addField("f!tempmute", "@user <time>", true)
        .addField("f!Pong")
        .addField("f!say", "(makes the bot say what you want it to)", true)
        .addField("f!clear", "<amount of messages you want to delete>", true)
        .addField("f!meme")
        .addField('f!kill', '!kill @user', true)
        .addField('f!contact', 'Gives you my discord and youtube to contact me', true)
        .addField('f!credits', "people who helped with the bot")
        .setFooter("Funk. By: cf#0010", bicon);



        const botembed2 = new Discord.RichEmbed()
        .setTitle("More Commands")
        .addField('f!kms', 'Just kill yourself but on discord')
        .addField('f!announce', 'Announce something but you will need a Verified role or it won\'t ping everyone')
        .addField('f!8ball', "Do i even need to explain?")
        .addField("f!mfo", "Make fun of some text you put")
        .addField("f!gif <something you want to search>", "Search for a gif")
        .addField("f!cow", "Makes a random cow")
        .addField("f!death", "Generates a reason for death")
        .addField("f!fortune", "a fortune command")
        .addField("f!invite", "Get an invite link to invite the bot to your server")
        .addField("f!discord", "Get the link to the testing server for the bot")
        .addField("f!fight", "Fights a player you want to fight")
        .addField('f!afk', "Just an AFK command idk")
        .addField("f!avatar","Shows your avatar")
        .addField("f!welcome.on", "Makes a welcome channel for the bot to say when a player joined/left")
        .addField("f!welcome.off", "Deletes the welcome channel")
        .addField("f!createchannel", "Creates a channel")
        .addField("f!deletechannel", "Deletes a channel")
        .setColor(cyan)
        .setFooter("Funk: cf#0010", bicon);
    message.channel.send(botembed);
    message.channel.send(botembed2);
}

module.exports.help = {
    name: "help",
}
