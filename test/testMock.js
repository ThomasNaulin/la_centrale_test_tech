const perfectPost = {
  contacts: {
    firstName: "Christophe",
    lastName: "Dupont",
    email: "testdepot@yopmail.fr",
    phone1: {
      value: "0607080901",
    },
  },
  creationDate: "2020-01-09T09:02:22.610Z",
  price: 33000,
  publicationOptions: ["STRENGTHS", "BOOST_VO"],
  reference: "B300053623",
  vehicle: {
    make: "HONDA",
    model: "CR-V",
    version: "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    category: "SUV_4X4_CROSSOVER",
    registerNumber: "DHDGDNDSD",
    mileage: 100000,
  },
};

const absoluteScamPost = {
  contacts: {
    firstName: "Ki",
    lastName: "La",
    email: "_____123568@yopmail.fr",
    phone1: {
      value: "0607080901",
    },
  },
  creationDate: "2020-01-09T09:02:22.610Z",
  price: 10000,
  publicationOptions: ["STRENGTHS", "BOOST_VO"],
  reference: "B300053623",
  vehicle: {
    make: "HONDA",
    model: "CR-V",
    version: "IV (2) 1.6 I-DTEC 160 4WD EXCLUSIVE NAVI AT",
    category: "SUV_4X4_CROSSOVER",
    registerNumber: "AA123AA",
    mileage: 100000,
  },
};

module.exports = {
  perfectPost,
  absoluteScamPost,
};
