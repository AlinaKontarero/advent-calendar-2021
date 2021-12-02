const { divings } = require("./divings.mock");
const { getTripleSums } = require("./getTripleSums");

describe("Given a measurements array", () => {
  describe("And it includes only 1 triple sum increasing", () => {
    it("should return 1 increased sum", () => {
      const mockArr = [199, 200, 208, 210, 200, 207]
      const results = getTripleSums(mockArr);
      expect(results).toEqual(1);
    });
  });
  describe("And the number of measurements is total mmock", () => {
    it("should return a number of increased sums equal to 1418", () => {
      const results = getTripleSums(divings);
      expect(results).toEqual(1418);
    });
  });
});
