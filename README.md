# goodz
> A command-line utility for generating goodness

Goodz allows for structured, repeatable code generation for development teams.


## Install
#### Install globally

```
$ npm install -g goodz
```
#### Install locally in your project

```
$ yarn add goodz --dev
```
```json
// package.json
"Scripts": {
    "goodz": "goodz"
}
```


## Usage

```
$ goodz --help

  Usage
    $ goodz          Select from a list of generators
    $ goodz <name>   Run a generator of that name

  Options
    -h, --help       Specify base path directory
    -d, --dir        Specify base path directory
    -v, --version    Specify base path directory

  Examples
    $ goodz react.component
    $ goodz react.component --dir app
```
Uses [Plop](https://github.com/amwmedia/plop) underneath... :raised_hands:


## Generators

### React Site
Generates a functional React app.  Based on [Create React App](https://github.com/facebook/create-react-app), but with some added goodness.
```
$ goodz react.app
```
#### Options
```
What is the name of your project?

Should this react app have Redux? (Y/n)
```


### React Component
Generates a react component inside your app, based on atomic design principles
```
$ goodz react.component
```
#### Options
```
Name of component?" (e.g. Button)

Where should this component live?
choices: ["atoms", "molecules", "organisms", "templates"]

Do you need a Stateless or Stateful component?
choices: ["Stateless", "Stateful"]

Should this component be connected to the redux store? (y/N)

What functions would you like to include?
choices: ["constructor", "componentDidMount", "componentWillMount"]
*statefull components only*

What redux functions would you like to include?
choices: ["componentWillReceiveProps", "mapStateToProps", "mapDispatchToProps"]
*connected components only*
```
#### Output
```
  └── src      
      └── components                
          └── atoms
              └── Button
                  |── Button.js            - Component file
                  |── Button.style.js      - Scoped styled component
                  |── index.js             - For easy reference
                  └── __tests__
                      └── Button.test.js   - Jest unit test file
```


### React Saga
Generates a saga inside your Redux app
```
$ goodz react.saga
```
#### Options
```
Saga Name? (e.g. counter)

Action Constant? (e.g. COUNTER_INCREMENT)

Reducer Constant? (e.g. COUNTER_CHANGED)
```
#### Output
```
  └── src      
      └── state                
        |── middleware.js
        |── saga.js
        └── store.js
        └── counter                
          |── counter.actions.js
          |── counter.reducer.js
          |── counter.saga.js
          └── index.js
```


## FAQ

#### Why did you make this?

Everyone deserves some goodness from time to time.


## Related

- [Plop](https://github.com/amwmedia/plop) - Credits to the plop team for building a great generator tool.
- [Create React App](https://github.com/facebook/create-react-app) - Set up a modern web app by running one command.
- [Redux](https://github.com/reduxjs/redux) - A predictable state container for JavaScript apps.
- [Redux Saga](https://github.com/redux-saga/redux-saga/) - An alternative side effect model for Redux apps.
- [Styled Components](https://github.com/styled-components) - Visual primitives for the component age.
- [Jest](https://github.com/facebook/jest) - Delightful JavaScript Testing.
- [Enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utilities for React.


## License

MIT