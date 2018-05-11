const debug = require('debug')('newMessage');

const embed = require('../components/timeToStop');
const config = require('../config.json');

module.exports = (message) => {
  let i = 0;
  for (; i < config.forbidden.caseInsensitive.length; i += 1) {
    if (message.content.toLowerCase().includes(config.forbidden.caseInsensitive[i].toLowerCase())) {
      message.delete(1000);
      debug(`Caught insensitive ${message.content}`);
      message.channel.send({ embed });
      return true;
    }
  }
  i = 0;
  for (; i < config.forbidden.caseSensitive.length; i += 1) {
    if (message.content.includes(config.forbidden.caseSensitive[i])) {
      message.delete(1000);
      debug(`Caught sensitive ${message.content}`);
      message.channel.send({ embed });
      return true;
    }
  }
  return false;
};
