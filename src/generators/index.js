const reactComponent = require('./react.comp');
const reactSaga = require('./react.saga');
const reactSite = require('./react.site');

module.exports = {
  fecth: ({ dir }) => ([
    reactSite({ dir }),
    reactComponent({ dir }),
    reactSaga({ dir }),
  ])
}