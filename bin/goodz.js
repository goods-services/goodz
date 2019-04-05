#!/usr/bin/env node

process.on('unhandledRejection', err => {
  throw err;
});

const spawn = require('cross-spawn');
const meow = require('meow');
const chalk = require('chalk');
const path = require('path');

const cli = meow(`
${chalk.bold('Usage')}
  $ goodz          ${chalk.dim('Select from a list of generators')}
  $ goodz <name>   ${chalk.dim('Run a generator of that name')}

${chalk.bold('Options')}
  -h, --help       ${chalk.dim('Specify base path directory')}
  -d, --dir        ${chalk.dim('Specify base path directory')}
  -v, --version    ${chalk.dim('Specify base path directory')}

${chalk.bold('Examples')}
  $ goodz react.component
  $ goodz react.component --dir app
`, {
	flags: {
		dir: {
			type: 'string',
			alias: 'd'
    },
    version: {
			type: 'boolean',
			alias: 'v'
    },
    help: {
			type: 'boolean',
			alias: 'h'
		}
	}
});

const {flags: options} = cli;
if(options.dir) {
  process.env.DIR = options.dir
}

const commandArgs = process.argv.slice(2);
const plopArgs = ['--plopfile', require.resolve('../src/index.js')];
const result = spawn.sync(path.join(__dirname, '../', 'node_modules/plop/src/plop.js'), plopArgs.concat(commandArgs), {
  stdio: 'inherit'
});

if (result.signal) {
  process.exit(1);
}

process.exit(result.status);