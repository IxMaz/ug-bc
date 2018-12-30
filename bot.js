const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

















var prefix = "-"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "510520286488035339") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**Watch Now: ${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`**LISTENING Now: ${argresult}**`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**Username Changed To ${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`**Avatar Changed Successfully To ${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`**Playing: ${argresult}**`)
} 



});








client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
    let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
    if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    if (!args[1]) {
    return;
    }
      message.guild.members.forEach(m => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .addField('# | الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.sendMessage(args)
      });
             if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك الصلاحيه لعمل برودكاست**");
      const AziRo = new Discord.RichEmbed()   
      .setColor('RANDOM')
      message.channel.sendEmbed(AziRo);          
    }
    } else {
      return;
    }
    });



    client.on("message", message => {
    
                if (message.content.startsWith(prefix + "obc")) {
                             if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      let args = message.content.split(" ").slice(1);
      var argresult = args.join(' '); 
      message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
     m.send(`${argresult}\n ${m}`);
    })
     message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
     message.delete(); 
    };     
    });
    










client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
               اوامر البرودكاست
         -bc : برودكاست لجميع اعضاء السيرفر بدون ايمبد
         -obc : برودكاست للاعضاء  الاونلاين فقط
         ------------------------------
         -help : عرض هذه الرسالة
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});


























client.login(process.env.BOT_TOKEN);
