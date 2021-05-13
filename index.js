const Discord = require ('discord.js');
const bot = new Discord.Client();
const token = 'ODQxNzUxMDcwMjg3MDY5MTg0.YJrTxg.r0FXSJoPqt5BanIkWOjGMArXAnU';
const ytdl = require ('ytdl-core');
const servidores = {'server':{
    connection: null,
    dispatcher: null
}
}

bot.login(token)

bot.on('ready', () => {
    console.log("Pronto!");
});

bot.on('message', async (msg) => { 
    
    // ...................................Filtros.......................................//
    
    if (msg.author.bot) return;
    if (!msg.guild) return;
    if (!msg.content.startsWith('?')) return;
    if (!msg.member.voice.channel) {msg.channel.send ('Entre em um canal!'); return};
    //.................................................................................//
    
    // ..................................Comandos......................................//

    if (msg.content === '?help'){
      msg.channel.send (`Olá!
      Aqui estão os comandos para o controle do bot
    
      ?Ambience: entra na sala 
      ?Stop: para o bot       
      ?Resume: continua o bot
      ?leave: sai da sala 
      
      E esses são os ambientes adicionados no Bot.
    
     ?Beach   ?Dunngeon      ?Jungle        ?DayCity       ?NightCity 
     ?Hell    ?HolyTemple    ?Eviltemple    ?DesertCamp    ?DesertCity 
     ?Tavern  ?QuietTavern   ?CampFlorest   ?Florest       ?NightFlorest
     `);}
     


    if (msg.content === '?Ambience'){
        msg.channel.send ('Onde estamos?');
        let voiceChannel = await msg.member.voice.channel;  
        voiceChannel.join();}
    
    if (msg.content === '?Stop'){
          msg.channel.send ('tirar um cochilo');
          servidores.server.dispatcher.pause();}
      
    if (msg.content === '?Resume'){ 
        msg.channel.send ('mais 5 minutos!');
        servidores.server.dispatcher.resume();}

    if (msg.content === '?leave'){
        msg.channel.send ('Já vou!');
        msg.member.voice.channel.leave();}
    
    
        //................................locais................................//
    
    if (msg.content === '?Beach'){
        msg.channel.send ('alguem trouxe o protetor ?');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=mMSa-3xSKk0'))
        }
        
    if (msg.content === '?Dungeon'){
        msg.channel.send ('cade o clérigo ?');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=WPpVMmTt74Q'))
        }
    
    if (msg.content === '?Jungle'){
        msg.channel.send ('cuidado com os mosquitos');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=5Jzp5H4mQVE'))
        }
          
    if (msg.content === '?DayCity'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=_52K0E_gNY0'))
        }

    if (msg.content === '?NightCity'){
        msg.channel.send ('Você não viu nada');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=bSbYpFMNxLI'))
       }

    if (msg.content === '?DesertCity'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=8uRtW8lBe0I&t=11s'))
       }
    
    if (msg.content === '?Hell'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=JzVIkY5tKcE&t=2s'))
       }
       
    if (msg.content === '?HollyTemple'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=bD4L0j5SrFM'))
       }
    
    if (msg.content === '?EvilTemple'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=WEEltzTwbE4'))
       }
    
    if (msg.content === '?Tavern'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=atp0MuIQc_M'))
       }      
       
    if (msg.content === '?QuietTavern'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=JzVIkY5tKcE&t=2s'))
       }

    if (msg.content === '?CamplFlorest'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=imxILmKjjCQ'))
       }

    if (msg.content === '?Florest'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=6Em9tLXbhfo'))
       }
       
    if (msg.content === '?NightFlorest'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=ybTXj_OE4-k&t=6s'))
       }

    if (msg.content === '?DesestCamp'){
        msg.channel.send ('olha só aquele item!');
        servidores.server.connection = await msg.member.voice.channel.join();
        servidores.server.dispatcher = servidores.server.connection.play(ytdl('https://www.youtube.com/watch?v=rOAiDBTr-N8'))
       }
      
      });