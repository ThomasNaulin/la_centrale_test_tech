const express = require("express");
const app = express();
const post = require("./post.json");
const { scamDetection } = require("./scamDetection");

app.listen(4000, function () {
  scamDetection(post).then((response) => {
    console.log(response);
  });
});
