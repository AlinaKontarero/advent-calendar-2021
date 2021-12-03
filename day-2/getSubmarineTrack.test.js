const { getSubmarineTrack } = require("./getSubmarineTrack");

const { directionsMock } = require("./directions.mock");

describe("Given an input", () => {
	describe("and the input is a mock", () => {
		it("should return 150", () => {
			const mockInput = [
				{ direction: "forward", value: 5 },
				{ direction: "down", value: 5 },
				{ direction: "forward", value: 8 },
				{ direction: "up", value: 3 },
				{ direction: "down", value: 8 },
				{ direction: "forward", value: 2 }
			];
			const result = getSubmarineTrack(mockInput);
			expect(result).toBe(150);
		});
	});
	describe("and the input is a submarine data", () => {
		it("should return a result", () => {
			const result = getSubmarineTrack(directionsMock);
			expect(result).toBe(1938402);
		});
	});
});
