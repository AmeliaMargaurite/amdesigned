const PugPlugin = require("pug-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const sourcePath = path.join(__dirname, "src");

const alterPugFolderStructure = (pathData) => {
	const sourceFile = pathData.filename;
	const relativeFile = path.relative(sourcePath, sourceFile);
	const { dir, name } = path.parse(relativeFile);

	// if page exists nested (only one level) eg /shop/product1
	const nestedDir = path.relative("pages", dir);

	if (name === "index") {
		return `${name}.html`;
	}
	return nestedDir ? `${nestedDir}/${name}/index.html` : `${name}/index.html`;
};

module.exports = {
	mode: "development",
	entry: {
		index: "./src/pages/index.pug",
		about: "./src/pages/about.pug",
		"about/things": "./src/pages/about/things.pug",
	},
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		clean: true,
	},
	resolve: {
		alias: {
			Images: path.join(__dirname, "./src/images/"),
		},
		// extensions: [".tsx", ".ts", ".js"],
	},
	// inline-source-map not for production use!
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new PugPlugin({
			filename: alterPugFolderStructure,
			pretty: true,
			js: {
				filename: "/js/[name].[contenthash].js",
			},
			css: {
				filename: "/css/[name].[contenthash].css",
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, "src/php"),
					to: path.join(__dirname, "dist/php"),
				},
			],
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// translates css into commonjs
					"css-loader",
					// compiles s[ac]ss to css
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name].[hash][ext]",
				},
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},
		],
	},
};
