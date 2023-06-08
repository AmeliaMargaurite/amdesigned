const glob = require("glob");
const path = require("path");
const fs = require("fs");

const rerenderContentList = (where) => {
	// const
	const file = glob.sync(path.resolve("dist/" + where + ".html"));
	console.log(file);
	// console.log({ where });
};

module.exports = rerenderContentList;
