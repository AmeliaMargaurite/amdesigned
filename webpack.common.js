const PugPlugin = require("pug-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const mjml2html = require("mjml");
const glob = require("glob");

const path = require("path");
const sourcePath = path.join(__dirname, "src");

const calcImageData = require("./image-helpers.js");
const load_articles = require("./src/js/load_articles.js");
const rerenderContentList = require("./src/js/rerenderContentList.js");

const alterPugFolderStructure = (pathData) => {
	// console.log({ pathData });
	const sourceFile = pathData.filename;
	const relativeFile = path.relative(sourcePath, sourceFile);
	const { dir, name } = path.parse(relativeFile);

	// if page exists nested (only one level) eg /shop/product1
	const nestedDir = path.relative("pages", dir);

	if (name === "index") {
		return `${name}.html`;
	}

	const phpFile = name.split(".php");

	if (phpFile.length > 1) {
		if (phpFile[0] === "index") {
			return `${phpFile[0]}.php`;
		} else {
			return nestedDir
				? `${nestedDir}/${phpFile[0]}/index.php`
				: `${phpFile[0]}/index.php`;
		}
	}

	return nestedDir ? `${nestedDir}/${name}/index.html` : `${name}/index.html`;
};

module.exports = {
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		clean: {
			keep: /sitemap.txt/,
		},
	},
	resolve: {
		alias: {
			Images: path.join(__dirname, "./src/images/"),
			Gallery: path.join(__dirname, "./src/components/gallery"),
			TS: path.join(__dirname, "./src/ts"),
			JS: path.join(__dirname, "./src/js"),
		},
		extensions: [".tsx", ".ts", ".js"],
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
			locals: [calcImageData, load_articles, rerenderContentList],
			postprocess: (content, info) => {
				const regex = /articles\/(.*)\/index.html/;
				const filename = info.assetFile.match(regex);

				if (!filename) return content;

				// article-template file has <replace> el to render content-list
				const replaceRegex = /<replace>(.*)<\/replace>/s;
				const contentListMatch = content.match(replaceRegex);

				if (!contentListMatch) return content;
				const contentList = contentListMatch[1];

				const contentListRegex = /<content-list>(.*)<\/content-list>/s;
				const newContent = content.replace(contentListRegex, contentList);

				return newContent.replace(replaceRegex, "");
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.join(__dirname, "src/php"),
					to: path.join(__dirname, "dist/php"),
				},
				{
					from: path.join(__dirname, "src/favicon"),
					to: path.join(__dirname, "dist/favicon"),
				},
				// {
				// 	from: path.join(__dirname, "src/root-files"),
				// 	to: path.join(__dirname, "dist/"),
				// },
				{
					from: path.join(__dirname, "src/article/"),
					to: path.join(__dirname, "dist/article"),
				},
				{
					from: path.join(__dirname, "src/articles/"),
					to: path.join(__dirname, "dist/articles"),
				},
				{
					from: path.join(__dirname, "src/quote/"),
					to: path.join(__dirname, "dist/quote"),
				},
				{
					// from regex ignores files starting with _ as they're includes
					// not whole files
					from: "src/mjml/[^_]*(?:\\.mjml)",
					to: "mjml/[name].php",
					transform: {
						transformer(content, absoluteFrom) {
							const filename = absoluteFrom.split("mjml\\_");
							if (filename.length === 1) {
								return mjml2html(content.toString(), { filePath: "src/mjml/" })
									.html;
							}
						},
					},
				},
			],
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer()],
			},
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
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [
					// translates css into commonjs
					"css-loader",
					"postcss-loader",
					// compiles s[ac]ss to css
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|jpeg)$/i,
				type: "asset/resource",
				use: [
					{
						loader: "responsive-loader",
						options: {
							name: "assets/img/[name].[hash].[ext]",
						},
					},
				],
			},
			{
				test: /\.(svg|gif)$/i,
				type: "asset",
				generator: {
					filename: "assets/img/[name].[hash].[ext]",
				},
			},
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
			},
		],
	},
};
