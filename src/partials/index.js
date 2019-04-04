const fs = require('fs');
const path = require('path');

const config = require('./partials');

const parsePartials = () => {
  const partials = [];
  config.forEach(p => {
    const { name, loc } = p;
    const partial = fs.readFileSync(path.join(__dirname, loc), 'utf8');
    partials.push({ name, partial });
  })
  return partials;
};

module.exports = parsePartials();