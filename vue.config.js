const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const isProd = process.env.NODE_ENV==='production';
console.log(isProd)
module.exports = {
	publicPath:isProd?'./':'',
	devServer: {
		port: '8888'
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, './src/assets/scss/*.scss')]
		}
	}
}
