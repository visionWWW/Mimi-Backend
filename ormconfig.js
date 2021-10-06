const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "type": "mysql",
  "host": "database-1.ciacoxeiblai.us-east-1.rds.amazonaws.com",
  "port": 3306,
  "username": "admin",
  "password": "12345678",
  "database": "mimidb",
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