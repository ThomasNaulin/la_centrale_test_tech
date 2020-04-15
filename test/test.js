const { scamDetection } = require("../scamDetection");
const { absoluteScamPost, perfectPost } = require("./testMock");

describe("Scam finder", function () {
  it("should show no scam", () => {
    return scamDetection(perfectPost).then((response) => {
      expect(response).toEqual({
        reference: "B300053623",
        scam: false,
        rules: [],
      });
    });
  });

  it("should show a scam failed to pass every rules", () => {
    return scamDetection(absoluteScamPost).then((response) => {
      expect(response.scam).toBe(true);
      expect(response.rules).toEqual([
        "rule::firstname::length",
        "rule::lastname::length",
        "rule::mail::alpha_rate",
        "rule::mail::number_rate",
        "rule::price::quotation_rate",
        "rule::registernumber::blacklist"
      ])
    });
  });
});
