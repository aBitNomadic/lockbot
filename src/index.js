const Discord = require("discord.js");
const client = new Discord.Client();
const secrets = require("../botsecrets.json");
const token = secrets.botToken;
const mongoClient = require("./db/mongoInit.js");

var mongo = require("./db/mongoDAO.js");
var admins = new Array(); //mabye preload them here?

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!login")){
    var user = message.author.username;
    if(mongo.isAdmin(user)){
      admins.push(user);
      message.reply(user + " has logged in.");
      console.log(user + " has logged in.");
    }
  }
  else if (message.content.startsWith("!setText")){
    if(admins.indexOf(message.author.username) != -1){
      var smsg = message.content.split(" ", 2);
      var kword = smsg[1];
      var stmt = smsg.slice(nthIndex(smsg, " ", 3));
      if(kword && stmt != -1){
        mongo.addStatment(kword, stmt);
        console.log('New statment added to mongo: '+ kword + ': ' + stmt);
        message.reply('New statment added to mongo: '+ kword + ': ' + stmt);
      } else {
        message.reply('There was an issue in processing your new command')
          .then();
      }
    } else {
      message.reply('you are not a logged in admin.')
        .then(msg => console.log(msg.author.username + ' was not a logged in admin.'))
        .catch(console.err);
    }

  }
  else if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(token);

//StackOverflow fo life1
function nthIndex(str, pat, n){
    var len = str.length, i= -1;
    while(n-- && i++ < len){
        i = str.indexOf(pat, i);
        if (i < 0) break;
    }
    return i;
}
