const { isAlphaNumeric, isNumeric, testLength } = require("./utils");
const { QuotationService, BlacklistService } = require("./services");

const alphaRate = (text, pourcentage) => {
  let count = 0;
  for (let i of text) {
    if (isAlphaNumeric(i)) count++;
  }
  return (count * 100) / text.length > pourcentage;
};

const numberRate = (text, pourcentage) => {
  let count = 0;
  for (let i of text) {
    if (isNumeric(i)) count++;
  }
  return (count * 100) / text.length < pourcentage;
};

async function testQuotation(vehicle, price) {
  const quotation = await QuotationService(vehicle);
  return price > quotation * 0.8 && price < quotation * 1.2;
}

async function testBlacklist(registerNumber) {
  const blacklisted = await BlacklistService(registerNumber);
  return !blacklisted;
}

async function testAllRules(post) {
  return {
    "rule::firstname::length": testLength(post.contacts.firstName, 2),
    "rule::lastname::length": testLength(post.contacts.lastName, 2),
    "rule::mail::alpha_rate": alphaRate(post.contacts.email.split("@")[0], 70),
    "rule::mail::number_rate": numberRate(
      post.contacts.email.split("@")[0],
      30
    ),
    "rule::price::quotation_rate": await testQuotation(
      post.vehicle,
      post.price
    ),
    "rule::registernumber::blacklist": await testBlacklist(
      post.vehicle.registerNumber
    ),
  };
}

async function scamDetection(post) {
  let scam = false;
  let rules = [];

  const testedRules = await testAllRules(post);

  for (let rule in testedRules) {
    if (testedRules[rule] === false) {
      scam = true;
      rules.push(rule);
    }
  }

  return {
    reference: post.reference,
    scam,
    rules,
  };
}

exports.scamDetection = scamDetection;
