module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,css,html,json,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};