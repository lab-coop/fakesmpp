const _ = require('lodash');
const optimist = require('optimist');
const options = require('./options');
const argv = _.reduce(cliOptions, (optimist, option, name) => {
  return optimist.options(name, option);
}, optimist);

if (argv.help) {
    optimist.showHelp();
    return;
}

module.exports = require('smpp').spawnServer(argv);

