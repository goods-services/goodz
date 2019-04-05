# goodz
> A command-line utility for generating goodness

Goodz allows for structured, repeatable code generation for development teams.

Uses [Plop](https://github.com/amwmedia/plop) underneath... :raised_hands:


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


## Generators

### React Site

### React Component

### React Saga


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