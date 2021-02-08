require("dotenv").config();
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    runtimeCaching,
    dest: "public",
  },
  env: {
    API_URL: process.env.API_URL,
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
  },
});

// module.exports = {
//   env: {
//     API_URL: process.env.API_URL,
//     AIRTABLE_KEY: process.env.AIRTABLE_KEY,
//   },
// };
