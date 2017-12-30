const Discord = require("discord.js");
const PREFIX = "!";
const YTDL = require("ytdl-core");

var bot = new Discord.Client();
const size    = 64
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
var servers = {};

function changeColor() {
  for (let index = 0; index < 1; ++index) {		
    bot.guilds.get("367266060833128448").roles.find('name', "Rainbow").setColor(rainbow[place])
		.catch(console.error);
		
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
  if(60000 < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, 60000);
});

bot.login(process.env.BOT_TOKEN);
