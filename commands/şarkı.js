module.exports = {
  name: "şarkı",
  description: "Phoenix Music",
  execute (client, message, args) {//It is encoded by K4H1N
    
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("> :beginner: **Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("> :beginner: **Herhangi bir şarkı oynatmıyorum.**");
    }
    message.channel.send(serverQueue.songs[0].title + ' - **Şuanda Oynatılan Şarkı.**')

    
    
    
  }
}