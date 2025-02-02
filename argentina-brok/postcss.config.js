const path = require('path');

module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-mixins': {
			mixinsDir: path.join(__dirname, 'styles/mixins'),
		},
		'postcss-simple-vars': {
			variables: {},
		},
		'postcss-import': {
			path: ['./styles'],
		},
	},
};
