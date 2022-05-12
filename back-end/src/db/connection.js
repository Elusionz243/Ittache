const environment = process.env.NODE_ENV || "developement";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
