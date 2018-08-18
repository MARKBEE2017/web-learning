// module.exports = {
// 	//__dirname是node.js里面的一个全局变量，指向当前的根目录
// 	entry:__dirname+'app/mian.js',
// 	output:{
// 		//打包后的文件位置和名称
// 		path:__dirname+'public',
// 		filename:'webpack.js'
// 	}
// }
const path = require('path');
 
module.exports = {
	entry: './app/main.js',                                // 入口文件
	output: {                                                 // 出口文件
		path: path.resolve(__dirname, './public'),         // 出口文件位置，一定要是绝对路径
		filename: 'bundle.js'                             // 出口文件名
	}
}
