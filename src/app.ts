import * as Discord from 'discord.js';
import { botToken } from './botsecrets';
import { createConnection } from 'typeorm';
import { CrudUser } from './users/crudUser';


const client = new Discord.Client();

createConnection().then(connection => {
  console.log('Connected to database database...');
}).catch(error => console.log(error));

client.on("ready", () => {
  console.log("I am ready!");
});

//Remake code in Typescrpit formatting!
client.on("message", (messageIn) => {
let message = messageIn;
let username = message.author.username;
if (message.content.startsWith("!login")){
  let findAdmin = new CrudUser();
  findAdmin.isAdmin(username).then((result) => {
    message.reply("you are a admin")
  }).catch(error => console.log(error));
} else if (message.content.startsWith("!addMe")){
  let createUser = new CrudUser();
  createUser.addNewUser(username).then((result) => {
    message.reply("you have been added to the database!")
  }).catch(error => console.log(error));
} else if (message.content.startsWith("!setText")){
  let findAdmin = new CrudUser();
  await findAdmin.isAdmin(username).then((result) => {
  }).catch(error => console.log(error));
  // if(admins.indexOf(user) != -1){
  //   var smsg = message.content.split(" ", 2);
  //   var kword = smsg[1];
  //   var stmt = smsg.slice(nthIndex(smsg, " ", 3));
  //   if(kword && stmt != -1){
  //     mongo.addStatment(kword, stmt);
  //     console.log('New statment added to mongo: '+ kword + ': ' + stmt);
  //     message.reply('New statment added to mongo: '+ kword + ': ' + stmt);
  //   } else {
  //     message.reply('There was an issue in processing your new command')
  //     .then();
  //   }
  // } else {
  //   message.reply('you are not a logged in admin.')
  //   .then(msg => console.log(msg.author.username + ' was not a logged in admin.'))
  //   .catch(console.err);
  // }

} else if (message.content.startsWith("ping")) {
  message.reply("pong!");
}});

client.login(botToken);
//StackOverflow fo life1
function nthIndex(str, pat, n){
var len = str.length, i= -1;
while(n-- && i++ < len){
  i = str.indexOf(pat, i);
  if (i < 0) break;
}
return i;
}
