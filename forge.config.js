const configFile = process.argv[2] ? process.argv[2] : './configs/example.js';
let config = require(configFile);
module.exports = config;