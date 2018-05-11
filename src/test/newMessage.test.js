const newMessage = require('../events/newMessage');

test('"Xd" triggers deleting', () => {
  expect(newMessage({
    content: 'wTF Xddddd',
    delete: () => {},
    channel: {
      send: () => {},
    },
  })).toBe(true);
});

test('":joy:" triggers deleting', () => {
  expect(newMessage({
    content: 'XDDDDD 😂😂😂 XDDDDDDDDDDDD',
    delete: () => {},
    channel: {
      send: () => {},
    },
  })).toBe(true);
});

test('"xD" doesn\'t trigger deleting', () => {
  expect(newMessage({
    content: 'xDDDDDDDDDDDDDDDDDD',
    delete: () => {},
    channel: {
      send: () => {},
    },
  })).toBe(false);
});
