// Load envoirnment variables
const envoirnmentVariables = require("dotenv").config()["parsed"];

module.exports.datastores = {
  default: {
    adapter: "sails-sqlite",
    url: envoirnmentVariables["URL_DATABASE"],
  },
};
