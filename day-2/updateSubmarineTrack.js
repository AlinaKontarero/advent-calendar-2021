const updateSubmarineTrack = directionsInput => {
	const getTrackSums = direction => {
		return directionsInput
			.filter(directionInstance => directionInstance.direction === direction)
			.map(({ value }) => value)
			.reduce((a, b) => a + b, 0);
	};

	const horizontalValue = getTrackSums("forward");

	const downValue = getTrackSums("down");

	const upValue = getTrackSums("up");

	let dimensions = {
    depth: 0,
    horizontal: 0,
		aim: 0
  }

	const depths = [];

	directionsInput.forEach(directionInstance => {
		if (directionInstance.direction === "forward") {
			dimensions.horizontal = dimensions.horizontal + directionInstance.value;
			dimensions.depth = dimensions.aim * directionInstance.value;
			depths.push(dimensions.depth)
		}
		if (directionInstance.direction === "down") {
			dimensions.aim = dimensions.aim + directionInstance.value;
		}
    if (directionInstance.direction === "up") {
			dimensions.aim = dimensions.aim - directionInstance.value;
    }
	});

	const sums = depths.reduce((a, b) => a + b, 0)
  return sums * dimensions.horizontal
};

module.exports = {
	updateSubmarineTrack
};
