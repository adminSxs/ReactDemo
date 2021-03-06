var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH=path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'./app/main');
var BUILD_PATH = path.resolve(ROOT_PATH,'build/');

var config = {
	entry:{
		app:['webpack/hot/only-dev-server',APP_PATH],
		vendor:['react']
	},
	output:{
		path:BUILD_PATH,
		filename:"bundle.js",
		publicPaht:"/",
		chunkFilename:'js/[id].[chunkhash].js'
	},
	  module: {

	
	  loaders: [
		{
			test: /\.jsx?$/,
			loaders: [,'react-hot','babel-loader?presets[]=es2015,presets[]=react'],
			exclude: /(node_modules|bower_components)/
		},{
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'url?limit=8192&name=images/[hash].[ext]'
			]
		}, {
			test: /\.css$/,
			loader:ExtractTextPlugin.extract('style','css','postcss')
		},  {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]'
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&name=fonts/[hash].[ext]'
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
		}
		]
	   },
	    postcss:[autoprefixer({browsers:['last 2 versions']})],
	   resolve: {
		extensions: ['', '.js', '.json']
	},
	   plugins:[
	   	new webpack.HotModuleReplacementPlugin(),
		// new HtmlWebpackPlugin({
		// 	title: 'DEME - ES6&React&Redux&Route&Webpack',
		// 	template: './build/index.html',
		// 	filename: 'index.html',
		// 	chunks: ['app'],
		// 	inject: 'body'
		// })
		new HtmlWebpackPlugin({
			template:'./app/index.html',
			inject:'body'
		}),
		new webpack.ProvidePlugin({
			$:'jquery',
			JQuery:'jquery'
		}),
		new ExtractTextPlugin("css/[name].css",{
			allChuncks:true
		}),
		 new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
		  new webpack.optimize.UglifyJsPlugin({
		      compress: {
		        warnings: false
		      }
		    }),

	  ]
};

module.exports = config;
