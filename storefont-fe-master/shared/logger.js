const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// export default logger.info;
// export const { warn, error, debug } = logger;

module.exports = logger;
