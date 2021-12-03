const getSubmarineTrack = directionsInput => {

	const getTrackSums = direction => {
		return directionsInput
			.filter(directionInstance => directionInstance.direction === direction)
			.map(({ value }) => value)
			.reduce((a, b) => a + b, 0);
	}

	const horizontalValue = getTrackSums("forward");


	const downValue = getTrackSums("down");

	const upValue = getTrackSums("up");


	return horizontalValue * (downValue - upValue)
};

module.exports = {
	getSubmarineTrack
};
