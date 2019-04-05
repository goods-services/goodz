// const promptDirectory = require('inquirer-directory');
// const path = require('path');
// const fs = require('fs');

const helpers = require('./utils/helpers');
const partials = require('./partials/index');
const generators = require('./generators/index');

module.exports = plop => {
  // plop.setPrompt('directory', promptDirectory);
  // register helpers
  helpers.forEach(h => plop.addHelper(h.name, h.fn));

  // register partials
  partials.forEach(p => plop.setPartial(p.name, p.partial));

  // register generators
  const dir = process.env.DIR || 'src';
  const generatorList = generators.fecth({ dir });
  generatorList.forEach(g => plop.setGenerator(g.name, g.properties));
};
