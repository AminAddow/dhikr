const path = require('path');
require('dotenv').config();

module.exports = {
	env: {
		API_URL: process.env.API_URL,
		AIRTABLE_KEY: process.env.AIRTABLE_KEY
	},

	webpack: (config) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['public'] = path.join(__dirname, 'public');

		return config;
	}
};
