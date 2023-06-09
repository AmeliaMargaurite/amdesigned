const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const entries = require("./entries.js");

module.exports = merge(common, {
	entry: entries(["showcase", "articles"], true),

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
