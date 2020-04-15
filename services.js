const QuotationService = (vehicle) => {
  return new Promise((response) => {
    setTimeout(() => {
      response(35000);
    }, 50);
  });
};

const BlacklistService = (registerNumber) => {
  return new Promise((response) => {
    setTimeout(() => {
      response(registerNumber === "AA123AA");
    }, 50);
  });
};

module.exports = {
  QuotationService,
  BlacklistService,
};
