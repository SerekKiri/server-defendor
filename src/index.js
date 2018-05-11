const Discord = require('discord.js');
const debug = require('debug')('index');
const config = require('./config.json');

const client = new Discord.Client();

const embed = new Discord.RichEmbed()
        .setTitle(`**IT'S TIME TO STOP** :middle_finger:`)
        .setColor(0xea5353)
        .setImage("https://imgur.com/RniBbFr.png")

if (process.env.NODE_ENV === 'production' || process.env.BOT_TOKEN !== undefined) {
  client.login(process.env.BOT_TOKEN);
} else {
  client.login(config.token);
}

client.on('ready', () => {
  debug(`Defendor has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setPresence({ game: { name: 'spammers\' screams', type: 2 } });
});

client.on('message', async (message) => {
  let deleted = false;
  let i = 0;
  let content = message.content.toLowerCase();
  debug(content);
  for (; i < config.forbidden.caseInsensitive.length; i += 1) {
    if (content.includes(config.forbidden.caseInsensitive[i].toLowerCase())) {
      message.delete(1000);
      debug(`Caught insensitive ${message.content}`);
      await message.channel.send({ embed });
      deleted = true;
      break;
    }
  }
  if (deleted === false) {
    i = 0;
    content = message.content;
    for (; i < config.forbidden.caseSensitive.length; i += 1) {
      if (content.includes(config.forbidden.caseSensitive[i])) {
        message.delete(1000);
        debug(`Caught sensitive ${message.content}`);
        await message.channel.send({ embed });
        deleted = true;
        break;
      }
    }
  }
});
