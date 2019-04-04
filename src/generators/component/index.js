const pathGen = require('../../utils/pathGen');

const pathPrefix = './generators/component/templates/';
const name = 'component';
const description = 'A component generator';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of component? (ex: Button)"
      },
      {
        type: "list",
        name: "componentFolder",
        message: "Where should this component live?",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "list",
        name: "type",
        message: "Do you need a Stateless or Stateful component?",
        choices: ["Stateless", "Stateful"],
        default: 0,
      },
      {
        type: "confirm",
        name: "isConnected",
        messge: "Should this component be connected?"
      },
      {
        type: "checkbox",
        name: "requiredFunctions",
        message: "What functions would you like to include?",
        choices: [
          { message: "Constructor", value: "constructor" },
          { message: "Component Did Mount", value: "componentDidMount" },
          { message: "Component Will Mount", value: "componentWillMount" }
        ],
        when: answers => answers.type === 'Stateful',
      },
      {
        type: "checkbox",
        name: "connectedFunctions",
        message: "What redux functions would you like to include?",
        choices: [
          {
            message: "Component Will Recieve Props",
            value: "componentWillReceiveProps"
          },
          { message: "Map State To Props", value: "mapStateToProps" },
          { message: "Map Dispatch To Props", value: "mapDispatchToProps" }
        ],
        when: answers => answers.isConnected,
      }
    ],
    actions: data => {
      const filePath = pathGen(dir);
      const { componentFolder } = data;
      const componentName = '{{pascalCase name}}';
    
      return [
        {
          type: 'add',
          path: filePath(`components/${componentFolder}/${componentName}/index.js`),
          templateFile: `${pathPrefix}index.hbs`
        },
        {
          type: 'add',
          path: filePath(`components/${componentFolder}/${componentName}/${componentName}.js`),
          templateFile: `${pathPrefix}component.hbs`
        },
        {
          type: 'add',
          path: filePath(`components/${componentFolder}/${componentName}/${componentName}.style.js`),
          templateFile: `${pathPrefix}componentStyle.hbs`
        },
        {
          type: 'add',
          path: filePath(`components/${componentFolder}/${componentName}/__tests__/${componentName}.test.js`),
          templateFile: `${pathPrefix}componentTest.hbs`
        },
      ];
    },
  }
});
