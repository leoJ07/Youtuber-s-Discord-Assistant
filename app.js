const Discord = require("discord.js")
const client = new Discord.Client({
  partials:["MESSAGE"]
});

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

client.login("Nzg3OTUzMjcwNDM3MTgzNTA5.X9ccqw.u27VtuBoOdgmybMRXxLsy1XDzDQ")