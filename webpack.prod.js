const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, "robots.txt"),
					to: path.join(__dirname, "dist"),
				},
			],
		}),
	],
});
