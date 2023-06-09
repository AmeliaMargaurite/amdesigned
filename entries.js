const glob = require("glob");
const path = require("path");
const fs = require("fs");

const url = "https://www.amdesigned.com.au/";

const entries = (folders = null, isProduction = false) => {
	const entries = {
		index: "./src/pages/index.pug",
		notFound404: "./src/pages/notFound404.pug",
		contact: "./src/pages/contact.php.pug",
		confirmation: "./src/pages/confirmation.pug",
		showcase: "./src/pages/showcase.pug",
		termsConditions: "./src/pages/terms-and-conditions.pug",
		privacyPolicy: "./src/pages/privacy-policy.pug",
		articles: "./src/pages/articles.pug",
		quote: "./src/pages/quote.php.pug",
	};
	// const regex = /\.\/src\/pages\/(.*).*/;
	const regex = /\.\/src\/pages\/(.*?)\./;

	const ignore = [
		"termsConditions",
		"privacyPolicy",
		"notFound404",
		"index",
		"confirmation",
	];
	const urlList = Object.keys(entries).map((entry) =>
		ignore.includes(entry) ? null : url + entries[entry].match(regex)[1] + "/"
	);

	if (folders) {
		folders.forEach((folder) => {
			const files = glob.sync(`./src/pages/${folder}/**.pug`);

			if (files.length > 0) {
				files.forEach((filename) => {
					const file = path.parse(filename);

					entries[file.name] = filename;

					urlList.push(url + folder + "/" + file.name + "/");
				});
			}
		});
	}

	if (isProduction) {
		urlList.unshift(url);
		const text = urlList.filter((url) => url).join("\n");
		const file = __dirname + "\\src\\root-files\\sitemap.txt";
		fs.writeFile(file, text, (err) => console.error(err));
	}
	return entries;
};
module.exports = entries;
