const getIncreasedDivingsNumber = divings => {
	const increasedDivings = [];

	for (let i = 0; i < divings.length; i++) {
		const prevDiving = divings[i];
		const nextDiving = divings[i + 1];
		if (prevDiving < nextDiving) {
			increasedDivings.push(nextDiving);
		}
	}

	return increasedDivings.length;
};

module.exports = {
	getIncreasedDivingsNumber
};
