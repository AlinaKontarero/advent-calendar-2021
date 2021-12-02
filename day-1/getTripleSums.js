const getTripleSums = divings => {

	const increasedSums = [];

	for (let i = 0; i < divings.length - 2; i++) {
		const sumA = divings[i] + divings[i + 1] + divings[i + 2];
		const sumB = divings[i + 1] + divings[i + 2] + divings[i + 3];
		if (sumA < sumB) {
			increasedSums.push(sumB);
		}
	}
	return increasedSums.length;
};

module.exports = {
	getTripleSums
};
