const config = require('./utils/config');
const loggers = require('./utils/loggers');
const http = require('http');
const app = require('./app');


http.createServer(app);

app.listen(config.PORT, () => {
  loggers.info(`App Running on Port ${config.PORT}`);
});