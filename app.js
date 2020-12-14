const Discord = require("discord.js")
const client = new Discord.Client({
  partials:["MESSAGE"]
});

const config = require("./config.json");

client.on("message", msg => {
  if(msg.content === "!!clear"){
    if(msg.member.hasPermission("ADMINISTRATOR")){
      msg.channel.messages.fetch().then(msgs => {
        msg.channel.bulkDelete(msgs);
      })
    } else {
      msg.channel.send("you dose not have permition to use this command");
    }
  }
})

client.on("ready", () => {
  console.log("loged in as", client.user.tag)
})

client.login(config.token)