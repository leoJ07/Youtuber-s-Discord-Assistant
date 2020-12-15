const Discord = require("discord.js")
const client = new Discord.Client({
  partials:["MESSAGE"]
});

require('dotenv').config();
const youtube = require("./youtube.js");

youtube.sub("UCroBddMDD0JnSI40dzx_iPw", "776791237574393868", "788094183549698069");
youtube.sub("UCroBddMDD0JnSI40dzx_iPw", "776791237574393868", "788309245678190592");
youtube.sub("UCroBddMDD0JnSI40dzx_iPw", "783768286575460362", "783768286575460366");
console.log(youtube.subs)

youtube.init(client, youtube.subs);

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

client.login(process.env.token)