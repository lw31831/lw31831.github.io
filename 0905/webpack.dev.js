const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
	entry:{//入口
		main:'./src/main.js'
	},
	mode:'development',//模式
	output:{//输出
		filename:'[name].js',//输出名字
		path:path.resolve(__dirname,'./dist'),//输出路径
		publicPath:'/'
	}, 
	devServer: { //热更新
		contentBase: 'dist',
		overlay:true
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js' 
		}
	},
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			{
				test:/\.html$/,
				use:[
					{loader:'file-loader',options:{name:'[name].html'}},
					{loader:'extract-loader'},
					{loader:'html-loader'}
				]
			},
			{
				test:/\.(jpg|png|gif)$/,
				use:[
					{loader:'file-loader',options:{name:'[name].[ext]'}}
				]
			}
		]
	}
}