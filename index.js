// index.js

// Import the pino library
const pino = require('pino');

// Create a logger instance
const log = pino({
  level: 'info', // Set the default log level (e.g., info, debug, error)
  transport: {
    target: 'pino-pretty', // Pretty-print logs for better readability
    options: {
      colorize: true, // Colorize logs in the terminal
    },
  },
});


const helloWorld = () => {
    log.info("hello world");
}

helloWorld();