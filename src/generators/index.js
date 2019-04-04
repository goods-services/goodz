const component = require('./component');
const saga = require('./saga');

module.exports = {
  fecth: ({ dir }) => ([
    component({ dir }),
    saga({ dir }),
  ])
}