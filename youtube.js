const YouTubeNotifier = require("youtube-notification");

const notifyer = new YouTubeNotifier({
  hubCallback: 'https://Youtuber-s-Discord-Assistant.joelhardeberg.repl.co'
})

notifyer.setup();

module.exports = {
  subs: {},
  init: (client, subs) => {
    this.subs = subs;
    this.client = client
    
    for(const key in this.subs){
      notifyer.subscribe(key);
    }

    notifyer.on('notified', data => {
      console.log('New Video');
      for(const key in this.subs){
        console.log("looping thro keys")
        if(data.channel.id === key){
          console.log("fined the youtube channel")
          for(let i = 0; i < subs[key].length; i++){
            console.log("looping thrue the Discord channels")
            const guild = this.client.guilds.cache.get(subs[key][i].guild);
            const channel = guild.channels.cache.get(subs[key][i].channel);
            channel.send(`${data.video.link}`)
          }
          break;
        }
      }
      /*(
        `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
      );*/
    });
  },
  sub: function(youtubeChannelId, discordGuildId, discordChannelId){
    if(this.subs[youtubeChannelId] === undefined){
      this.subs[youtubeChannelId] = [];
    }

    this.subs[youtubeChannelId].push({channel: discordChannelId, guild: discordGuildId});
  },
  unsub: function(youtubeChannelId, discordGuildId, discordChannelId){
    for(let i = 0; i < this.subs[youtubeChannelId].length; i++){
      if(this.subs[youtubeChannelId][i].channel === discordChannelId && this.subs[youtubeChannelId][i].guild === discordGuildId){
        this.subs[youtubeChannelId].splice(i, 1);
        if(this.subs[youtubeChannelId].length === 0){
          delete this.subs[youtubeChannelId];
        }
        return;
      }
    }
  }
}