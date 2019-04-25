const reactComponent = require('./react.comp');
const reactSaga = require('./react.saga');
const reactSite = require('./react.site');
const gatsbySite = require('./gatsby.site');
const gatsbyPage = require('./gatsby.page');
const gatsbyTemplate = require('./gatsby.template');

module.exports = {
  fecth: ({ dir }) => ([
    reactSite({ dir }),
    reactComponent({ dir }),
    reactSaga({ dir }),
    gatsbySite({dir}),
    gatsbyPage({dir}),
    gatsbyTemplate({dir}),
  ])
}