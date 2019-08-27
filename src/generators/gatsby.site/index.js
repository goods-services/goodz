const pathGen = require('../../utils/pathGen');
const actions = require('../../utils/actions');

const pathPrefix = './generators/gatsby.site/templates/';
const name = 'gatsby.app';
const description = 'Generate a Gatsby app';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: value => {
          if (/.+/.test(value)) return true;
          return 'Project name is required';
        },
      },
      {
        type: 'confirm',
        name: 'isContentful',
        message: 'Do you want to use Contentful as a source?',
      },
      {
        when: response => {
          return response.isContentful;
        },
        type: 'input',
        name: 'contentfulToken',
        message: 'What is your Contentful Content Delivery API Token?',
        default: 'CONTENTFUL_TOKEN',
      },
      {
        when: response => {
          return response.isContentful;
        },
        type: 'input',
        name: 'contentfulSpace',
        message: 'What is your Contentful Space ID?',
        default: 'CONTENTFUL_SPACE',
      },
    ],
    actions: () => {
      const filePath = pathGen(dir !== 'src' ? dir : '/');

      return [
        actions.add(`${pathPrefix}.eslintrc`, filePath('.eslintrc')),
        actions.add(`${pathPrefix}.gitignore.hbs`, filePath('.gitignore')),
        actions.add(
          `${pathPrefix}gatsby-browser.js`,
          filePath('gatsby-browser.js')
        ),
        actions.add(
          `${pathPrefix}gatsby-config.js.hbs`,
          filePath('gatsby-config.js')
        ),
        actions.add(`${pathPrefix}gatsby-node.js`, filePath('gatsby-node.js')),
        actions.add(`${pathPrefix}jsconfig.json`, filePath('jsconfig.json')),
        actions.add(`${pathPrefix}.prettierrc`, filePath('.prettierrc')),
        actions.add(
          `${pathPrefix}config/.env.development.hbs`,
          filePath('config/.env.development')
        ),
        actions.add(
          `${pathPrefix}config/.env.production.hbs`,
          filePath('config/.env.production')
        ),
        actions.add(`${pathPrefix}package.json.hbs`, filePath('package.json')),
        actions.add(`${pathPrefix}README.md`, filePath('README.md')),
        {
          type: 'addMany',
          base: pathPrefix,
          destination: filePath(),
          templateFiles: `${pathPrefix}src/**/*`,
          abortOnFail: false,
        },
        {
          type: 'addMany',
          base: pathPrefix,
          destination: filePath(),
          templateFiles: `${pathPrefix}gatsby/**/*`,
        },
      ];
    },
  },
});
