const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "snow",
  "password": "12345678",
  "database": "snowdb",
  "synchronize": true,
  "logging": true,
  "entities": [
    "src/entity/**/*.ts"
  ],
  "migrations": [
    "src/migration/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  namingStrategy: new SnakeNamingStrategy()
}