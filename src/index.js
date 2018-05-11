const Discord = require('discord.js');
const debug = require('debug')('index');
const config = require('./config.json');

const newMessage = require('./events/newMessage');
const newMember = require('./events/newMember');

const client = new Discord.Client();

if (process.env.NODE_ENV === 'production' || process.env.BOT_TOKEN !== undefined) {
  client.login(process.env.BOT_TOKEN);
} else {
  client.login(config.token);
}

client.on('ready', () => {
  debug(`Defendor has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setPresence({ game: { name: 'spammers\' screams', type: 2 } });
});

client.on('message', newMessage);

client.on('guildMemberAdd', newMember);
