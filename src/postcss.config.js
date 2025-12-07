const path = require('path');

module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-mixins': {
			mixinsDir: path.resolve(__dirname, 'shared/styles/mixins'),
		},
		'postcss-import': {
			path: [path.resolve(__dirname, 'shared/styles')],
		},
		'postcss-nested': {},
		'postcss-simple-vars': {
			variables: {},
		},
	},
};
