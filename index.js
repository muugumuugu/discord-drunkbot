console.log("Beep beep! 🤖");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login('ODQxMDM2NjQ5ODYwNTYyOTQ0.YJg6aw.DigQpj1oehZftHloHF1V4-dnJVw');

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("hewwo");
}

//const commandHandler = require("./commands.js");

client.on("message",(msg)=>{
const walk = require("./randomwalk.js");
const id='841036649860562944';
const commands = {walk};
    if (msg.mentions.has(id)) {
        console.log("beep");
        msg.reply(`baa baa boooi`);
    };

    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "~") {
      command = command.substring(1);
      if (commands[command]){
      commands[command](msg, tokens);
      }
    }
}
)