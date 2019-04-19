const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'r#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations About Rainbow bot:')
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created By: 2oLF')
  console.log('╚[════════════]╝')
client.user.setActivity("r#help | By 2oLF",{type: 'WATCHING'});
console.log('Done The Watching Setup Completed')
	
});

client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {
	  let role = message.guild.roles.find('name', 'Rainbow bot.')
    if(role) return message.channel.send(`This Step Already Completed !`)
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow bot.",
   color: "#000000",
   permissions:[]
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')
}})

client.on('ready', () => {
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow bot.');
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);
})

client.on("message", message => {
  if (message.content === "r#help") {
      message.react('🌈')
        let rainembed = new Discord.RichEmbed()
        .setDescription(`**
=====================🌈 RainbowBot. 🌈=====================
r#set 
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
r#inv 
- لدعوة البوت
- To Invite the bot
خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow 
=====================🌈 RainbowBot. 🌈=====================
**`)
message.author.sendEmbed(rainembed)
    }})
   client.on('message', message => {
	   if(message.content.startsWith(`r#inv`)) { 
		   if(!message.channel.guild) return;
                 message.react('🌈')
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.author.send({embed})
	   }
   });

client.login(process.env.BOT_TOKEN)
