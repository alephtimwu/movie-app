import React from 'react';
// import './__mocks__/jestGlobalMocks';

window.React = React;
const mockConsoleMethod = realConsoleMethod => {
  const ignoredMessages = [
    'test was not wrapped in act(...)',
    'Request failed with status code',
    "Cannot read property 'origin' of undefined"
  ];

  return (message, ...args) => {
    const containsIgnoredMessage = ignoredMessages.some(ignoredMessage =>
      message.includes(ignoredMessage)
    );

    if (!containsIgnoredMessage) {
      realConsoleMethod(message, ...args);
    }
  };
};

console.warn = jest.fn(mockConsoleMethod(console.warn));
console.error = jest.fn(mockConsoleMethod(console.error));
// console.log = jest.fn(mockConsoleMethod(console.log));

// window.matchMedia =
//   window.matchMedia ||
//   function() {
//     return {
//       matches: false,
//       addListener: function() {},
//       removeListener: function() {}
//     };
//   };

// window.requestAnimationFrame =
//   window.requestAnimationFrame ||
//   function(callback) {
//     setTimeout(callback, 0);
//   };
