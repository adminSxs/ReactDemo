var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool='source-map';
config.plugins.push(new webpack.DefinePlugin({
	"process.env":{
		NODE_ENV:'production'
	}
}));
module.exports=config;