const pathGen = require('../../utils/pathGen');

const pathPrefix = './generators/gatsby.template/templates/';
const name = 'gatsby.template';
const description = 'Generate a Gatsby Template';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Template Name (e.g. blogPost):",
        validate: value => {
          if (/.+/.test(value)) return true;
          return 'Template name is required';
        },
      },
    ],
    actions: () => {
      const filePath = pathGen(dir);
      const pageName = '{{camelCase name}}';

      return [
        {
          type: 'add',
          path: filePath(`templates/${pageName}.js`),
          templateFile: `${pathPrefix}template.hbs`
        },
      ]
    },
  }
});
