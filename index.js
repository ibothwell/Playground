// index.js

// Import the pino library
const pino = require('pino');
const pinoCaller = require('pino-caller')
const isProduction = process.env.NODE_ENV === 'production'


// Create a logger instance
const logPino = pino({
  name: "index logger",
  level: !isProduction ? 'debug' : 'info', // Set the default log level (e.g., info, debug, error)
  transport: {
    target: !isProduction ? 'pino-pretty' : undefined, // Pretty-print logs for better readability
    options: {
      colorize: true, // Colorize logs in the terminal
    },
  },
  redact: {
    paths: ['secret']
  },
  nestedKey: 'payload'
});
const log = pinoCaller(logPino,{
  relativeTo: __dirname,
  // stackAdjustment: 1
});


const helloWorld = () => {
    log.info("hello world");
    log.debug({secret: "you will never see me."},"I have a secret to tell");
}

helloWorld();