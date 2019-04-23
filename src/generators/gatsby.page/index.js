const pathGen = require('../../utils/pathGen');

const pathPrefix = './generators/gatsby.page/templates/';
const name = 'gatsby.page';
const description = 'Generate a Gatsby page';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page Name (e.g. contact):",
        validate: value => {
          if (/.+/.test(value)) return true;
          return 'Page name is required';
        },
      },
    ],
    actions: () => {
      const filePath = pathGen(dir);
      const pageName = '{{camelCase name}}';

      return [
        {
          type: 'add',
          path: filePath(`pages/${pageName}.js`),
          templateFile: `${pathPrefix}page.hbs`
        },
      ]
    },
  }
});
