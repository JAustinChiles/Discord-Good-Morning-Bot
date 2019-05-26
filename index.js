const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


//Use these var to choose randomly between different options, min = 1;   max = max number + 1;

var min = 1;
var max = 8;
var random;

//Turn bot on

bot.on("ready", async () =>  {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("on League of Legends!");
});

//Bot listens for messages and then goes through if statements to choose responce

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}goodmorning`){
        let random = Math.floor(Math.random() * (+max - +min))+ +min;
        if(random === 1 || random === 2 || random === 3){
            return message.channel.send("Good morning friend! I hope you have a wonderful day!");
        }
        if(random === 4 || random === 5){
            return message.channel.send("Good morning friend! Let's go on adventures!")
        }
        if(random === 6){
            return message.channel.send("Good morning friend! How are you?")
        }
        if(random === 7){ //path to a picture from a song called good morning
            return message.channel.send({files: ["./images/GoodMorning.jpg"]})
        }
    }

    //Random number generator for the Magic Conch Shell from Spongebob
    if(cmd === `${prefix}ohMCS`){
        let random = Math.floor(Math.random() * (+max - +min))+ +min;
        if(random === 1 || random === 2 || random === 3){
            return message.channel.send("Maybe someboday.");
        }
        if(random === 4 || random === 5){
            return message.channel.send("Follow the seahorse.")
        }
        if(random === 6 || random === 7){
            return message.channel.send("Try asking again.")
        }
    }


})

bot.login(botconfig.token);