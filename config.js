var path = require('path');

var config = {
  database: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite')
    }
  }
};

if (process.env.NODE_ENV === 'test') {
  config.database = {
    client: 'sqlite3',
    connection: {
      filename: ":memory:"
    }
  };
}

module.exports = config;
