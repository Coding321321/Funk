const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let reddit = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "meirl",
        "dankmemes",
        "dankmeme",
        "me_irl",
        "2meirl4meril",
        "AdviceAnimals",
        "wholesomememes",
        "MemeEconemy",
        "techsupportanimals",
        "memes",
        "epicmemes",
        "OutOfTheLoop",
        "dankchristianmemes",
        "dank_meme",
        "Memes_Of_The_Dank"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

    message.channel.startTyping();


    randomPuppy(subreddit).then(url => {
        snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));
    }).catch(err => console.log(err));
};


module.exports.help = {
    name: "meme",
    usage: "generate memes"
}