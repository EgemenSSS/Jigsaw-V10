module.exports = {
  name: "devam", 
  description: "Phoenix Music",
  execute (client, message, args) {//It is encoded by K4H1N
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("> :beginner: **Herhangi bir ses kanalında bulunmalısınız.**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('> :beginner: **Oynatılan bir şarkı Bulunmuyor.**')
    if(serverQueue.playing) return message.channel.send(`> :beginner: Duran bir şarkı yok.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("> ✅ **Duraklatılan şarkı sürdürüldü.**") 
 } 
    
    message.channel.send("> :beginner: **Duraklatılan bir şarkı yok.**")
    
  }
}