const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
	mode: "development",
	// Put temporary entry points here until ready for production
	// entry: { quote: "./src/pages/quote.php.pug" },
	// inline-source-map not for production use!
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		historyApiFallback: { index: "/notFound404/index.html" },
		devMiddleware: {
			// writeToDisk: (filePath) => {
			// 	console.log(filePath);
			// 	return /\.php$/.test(filePath);
			// },
			// writeToDisk: true,
		},
	},
	// plugins: [
	// 	new CopyPlugin({
	// 		patterns: [
	// 			{
	// 				from: path.join(__dirname, "src/dev-files"),
	// 				to: path.join(__dirname, "dist"),
	// 			},
	// 		],
	// 	}),
	// ],
});
