const pathGen = require('../../utils/pathGen');
const actions = require('../../utils/actions');

const pathPrefix = './generators/react.site/templates/';
const name = 'react.app';
const description = 'Generate a react app';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
        validate: value => {
          if (/.+/.test(value)) return true;
          return 'Project name is required';
        },
      },
      {
        type: "confirm",
        name: "isRedux",
        message: "Should this react app have Redux?"
      },
    ],
    actions: data => {
      const filePath = pathGen(dir !== 'src' ? dir : '/');
      const { isRedux } = data;

      const ifRedux = isRedux ? [
        {
          type: 'addMany',
          base: pathPrefix,
          destination: filePath(),
          templateFiles: `${pathPrefix}src/state/**/*`,
        }
      ] : [];
    
      return [
        actions.add(`${pathPrefix}.babelrc`, filePath('.babelrc'), {
          abortOnFail: true,
        }),
        actions.add(`${pathPrefix}.eslintrc`, filePath('.eslintrc')),
        actions.add(`${pathPrefix}.gitignore.hbs`, filePath('.gitignore')),
        actions.add(`${pathPrefix}.prettierrc`, filePath('.prettierrc')),
        actions.add(`${pathPrefix}src/index.js.hbs`, filePath('/src/index.js')),
        actions.add(`${pathPrefix}src/App.js.hbs`, filePath('/src/App.js')),
        actions.add(`${pathPrefix}package.json.hbs`, filePath('package.json')),
        actions.add(`${pathPrefix}README.md.hbs`, filePath('README.md')),
        actions.add(`${pathPrefix}public/favicon.ico`, filePath('/public/favicon.ico')),
        actions.add(`${pathPrefix}public/index.html.hbs`, filePath('/public/index.html')),
        actions.add(`${pathPrefix}public/manifest.json.hbs`, filePath('/public/manifest.json')),
        {
          type: 'addMany',
          base: pathPrefix,
          destination: filePath(),
          templateFiles: `${pathPrefix}test/*`,
        },
      ].concat(ifRedux);
    },
  }
});