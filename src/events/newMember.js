const debug = require('debug')('newMember');

module.exports = (member) => {
  debug(`User ${member.user.username} joined`);
  const role = member.guild.roles.find('name', 'Użytkownik');
  member.addRole(role).catch(debug);
};
