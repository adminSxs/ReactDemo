var config = require('./webpack.config.js');
var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BULID_PATH = path.resolve(ROOT_PATH,'build/');

config.debug = true;
config.devtool = 'eval';
config.devServer={
	port:3001,
	host:'0.0.0.0',
	hot:true,
	inline:true,
	contentBase:BULID_PATH,
	historyApiFallback:true,
	proxy:{
		'/web/*':{
			target:'http://localhost:8080',
			secure:false
		}
	}
}

module.exports = config;
