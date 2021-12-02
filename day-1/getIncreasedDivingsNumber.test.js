const { twentyDivings, divings } = require("./divings.mock");
const { getIncreasedDivingsNumber } = require("./getIncreasedDivingsNumber");

describe("Given a measurements array", () => {
	describe("And the number of measurements is 20", () => {
		it("should return 13 increased divings", () => {
          const results = getIncreasedDivingsNumber(twentyDivings);
          expect(results).toEqual(13);
        });
	});
	describe("And the number of measurements is total mmock", () => {
		it("should return a number of increased divings", () => {
			const results = getIncreasedDivingsNumber(divings);
			expect(results).toEqual(1374);
		});
	});
});
