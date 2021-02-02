require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
  },

  // webpack: (config) => {
  //   module: {
  //   	rules: [
  //   	  {
  //   		test: /\.css$/i,
  //   		use: [
  //   		  "style-loader",
  //   		  "css-loader",
  //   		  {
  //   			loader: "postcss-loader",
  //   		  },
  //   		],
  //   	  },
  //   	],
  //   },
  //   return config
  //   },
};
