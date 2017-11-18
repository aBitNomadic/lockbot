const Discord = require("discord.js");
const client = new Discord.Client();
const secrets = require("../botsecrets.json");
const token = secrets.botToken;

var mongoClient = require("./db/mongoInit.js").MongoClient;

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(token);
