const calcImageData = (fraction, fractions, breakpoints, path) => {
	const sizes = new Array();
	const intrinsicSizes = new Array();
	let largestNum = 0;
	if (fraction) {
		// single figure
		breakpoints.forEach((point, index) => {
			intrinsicSizes = breakpoints;
			if (index < breakpoints.length - 1) {
				sizes.push(`max-width(${point * fraction}px) ${point}px`);
			} else {
				sizes.push(` ${point}px`);
				largestNum = point;
			}
		});
	} else if (fractions) {
		// means it's an array
		fractions.forEach((fraction, index) => {
			if (breakpoints[index]) {
				const point = Math.round(breakpoints[index] * fraction);
				largestNum = point;
				intrinsicSizes.push(point);
				if (index < fractions.length - 1) {
					sizes.push(`(max-width: ${breakpoints[index]}px) ${point}px`);
				} else {
					sizes.push(` ${point}px`);
				}
			}
		});
	}

	intrinsicSizes.sort();

	return { intrinsicSizes, sizes, largestNum };
};

module.exports = calcImageData;
