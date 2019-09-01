const path = require("path");

const resources = [
  "_bem.scss",
  "_color.scss",
  "_shadow.scss"
];
module.exports = resources.map(file => path.resolve(__dirname, file));