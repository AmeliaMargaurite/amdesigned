const glob = require("glob");
const path = require("path");
const fs = require("fs");

const load_articles = () => {
	const files = glob.sync(path.resolve(`src/pages/articles/**.pug`));
	const sourcePath = path.join(__dirname, "src/pages/articles");
	const allTags = [];

	const articles = files.map((filename) => {
		const relative = path.relative(sourcePath, filename);
		const { name } = path.parse(relative);
		let image = "image.jpg";
		let title = null;
		let tags = [];
		let classNames = null;

		try {
			const data = fs.readFileSync(filename, "utf-8");
			// search data for page_image = require(...)
			const imgRegex = /page_image = require\(['|"]Images\/(.*)['|"]\)/;
			const imageReturn = data.match(imgRegex);
			if (imageReturn && imageReturn[1]) {
				image = imageReturn[1];
			}

			const titleRegex = /title = ['|"](.*)['|"]/;
			const titleReturn = data.match(titleRegex);
			if (titleReturn && titleReturn[1]) {
				title = titleReturn[1];
			}

			const tagsRegex = /tags = "(.*)"/;
			const tagsReturn = data.match(tagsRegex);
			if (tagsReturn && tagsReturn[1]) {
				// Want to get count of articles per tag
				tags = tagsReturn[1].split(", ");
				allTags.push(...tags);
				classNames = tags.map((tag) => tag.split(" ").join("-")).join(" ");
			}

			const pageDescriptionRegex = /page_description = ['|"](.*)['|"]/;
			const pageDescriptionReturn = data.match(pageDescriptionRegex);
			if (pageDescriptionReturn && pageDescriptionReturn[1]) {
				pageDescription = pageDescriptionReturn[1];
			}
		} catch (err) {
			console.error(err);
		}
		return { slug: name, title, image, tags, classNames, pageDescription };
	});

	// Tag count
	const countedTags = {};
	allTags.forEach((tag) => {
		if (countedTags[tag]) {
			countedTags[tag] = countedTags[tag] + 1;
		} else {
			countedTags[tag] = 1;
		}
	});
	const sortedTags = Object.fromEntries(
		Object.entries(countedTags).sort(([, a], [, b]) => b - a)
	);

	return { articles, tags: sortedTags };
};

module.exports = load_articles;
