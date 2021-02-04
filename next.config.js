require("dotenv").config();
const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    API_URL: process.env.API_URL,
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
  },
});
