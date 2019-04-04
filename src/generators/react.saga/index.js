const pathGen = require('../../utils/pathGen');

const pathPrefix = './generators/react.saga/templates/';
const name = 'react.saga';
const description = 'Generate a redux saga';

module.exports = ({ dir }) => ({
  name,
  properties: {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Saga Name (e.g. counter):"
      },
      {
        type: "input",
        name: "actionConstant",
        message:
          "Action Constant (e.g. COUNTER_INCREMENT, COUNTER_DECREMENT):"
      },{
        type: "input",
        name: "reducerConstant",
        message:
          "Reducer Constant (e.g. COUNTER_CHANGED):"
      }
    ],
    actions: () => {
      const filePath = pathGen(dir);
      const sagaName = '{{camelCase name}}';

      return [
        {
          type: 'add',
          path: filePath(`state/${sagaName}/index.js`),
          templateFile: `${pathPrefix}index.hbs`
        },
        {
          type: 'add',
          path: filePath(`state/${sagaName}/${sagaName}.actions.js`),
          templateFile: `${pathPrefix}saga.actions.hbs`
        },
        {
          type: 'add',
          path: filePath(`state/${sagaName}/${sagaName}.reducer.js`),
          templateFile: `${pathPrefix}saga.reducer.hbs`
        },
        {
          type: 'add',
          path: filePath(`state/${sagaName}/${sagaName}.saga.js`),
          templateFile: `${pathPrefix}saga.saga.hbs`
        },
        {
          type: 'modify',
          path: filePath(`state/store.js`),
          pattern: /(\/\/ IMPORT MODULE FILES)/g,
          template: `$1\nimport {{camelCase name}} from './{{camelCase name}}';`
        },
        {
          type: 'modify',
          path: filePath(`state/store.js`),
          pattern: /(\/\/ INCLUDE REDUCER)/g,
          template: `$1\n    {{camelCase name}}: {{camelCase name}}.reducer,`
        },
        {
          type: 'modify',
          path: filePath(`state/saga.js`),
          pattern: /(\/\/ IMPORT MODULE FILES)/g,
          template: `$1\nimport {{camelCase name}} from './{{camelCase name}}';`
        },
        {
          type: 'modify',
          path: filePath(`state/saga.js`),
          pattern: /(\/\/ INCLUDE SAGA)/g,
          template: `$1\n    ...{{camelCase name}}.saga,`
        },
        // {
        //   type: 'add',
        //   path: filePath(`state/${sagaName}/${sagaName}.test.js`),
        //   templateFile: `${pathPrefix}sagaInsertSaga.hbs`
        // },
        // {
        //   type: 'add',
        //   path: filePath(`state/${sagaName}/${sagaName}.test.js`),
        //   templateFile: `${pathPrefix}storeInsertImport.hbs`
        // },
        // {
        //   type: 'add',
        //   path: filePath(`state/${sagaName}/${sagaName}.test.js`),
        //   templateFile: `${pathPrefix}storeInsertReducer.hbs`
        // },
      ]
    },
  }
});
