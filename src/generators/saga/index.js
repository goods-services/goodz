const pathGen = require('../../utils/pathGen');

const pathPrefix = './generators/saga/templates/';
const name = 'saga';
const description = 'A redux saga generator';

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
        type: "list",
        name: "actionConstants",
        multiple: true,
        message:
          "Comma separated list of Action Constants (e.g. COUNTER_INCREMENT, COUNTER_DECREMENT):"
      },{
        type: "list",
        name: "reducerConstants",
        multiple: true,
        message:
          "Comma separated list of Reducer Constants (e.g. COUNTER_CHANGED):"
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
        // {
        //   type: 'add',
        //   path: filePath(`state/${sagaName}/${sagaName}.test.js`),
        //   templateFile: `${pathPrefix}sagaInsertImport.hbs`
        // },
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
