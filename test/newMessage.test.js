const newMessage = require('../events/newMessage');

describe('test newMessage', () => {
  it('"Xd" triggers deleting', () => {
    expect(newMessage({
      content: 'wTF Xddddd',
      delete: () => { },
      channel: {
        send: () => { },
      },
    })).toBe(true);
  });

  it('":joy:" triggers deleting', () => {
    expect(newMessage({
      content: 'XDDDDD 😂😂😂 XDDDDDDDDDDDD',
      delete: () => { },
      channel: {
        send: () => { },
      },
    })).toBe(true);
  });

  it('"xD" doesn\'t trigger deleting', () => {
    expect(newMessage({
      content: 'xDDDDDDDDDDDDDDDDDD',
      delete: () => { },
      channel: {
        send: () => { },
      },
    })).toBe(false);
  });

})
