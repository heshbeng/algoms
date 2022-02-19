#!/usr/bin/env node

const yargs = require('yargs');

const options = yargs
/*
.usage(`Usage: algoms <command> [options]

From the algoms directory, enter 'npm install -g' to enable the 'algoms' command globally.
`)
*/
.usage(`Usage: algoms [options]

AlgoMS signs one or more transaction files with all of the specified private keys.

From the algoms directory, enter 'npm install -g' to enable the 'algoms' command globally.
`)
//.command('msig', 'Sign tx file with multisig wallet')
//.example('algoms msig -t /path/to/algorand/tx1.tx -t /path/to/algorand/tx2.tx -k "private key 1" -k "private key 2"...', "Signs 'tx1.tx' and 'tx2.tx' with the specified keys")
.example('algoms -t /path/to/algorand/tx1.tx -t /path/to/algorand/tx2.tx -k "private key 1" -k "private key 2"...', `Signs 'tx1.tx' and 'tx2.tx' with the specified keys.

If the filepath is not specified, it will default to the current working directory.`)
.option('t', { alias: 'transaction', description: 'Filename of the transaction to be signed (If signing multiple transactions at once, make sure each one has a unique filename)', type: 'string', demandOption: true})
.option('k', { alias: 'key', description: 'Private key or seed phrase in " "', type: 'string', demandOption: true})
.argv;

const txIn = yargs.argv.transaction;
const privKeys = yargs.argv.key;
module.exports.txIn = txIn;
module.exports.privKeys = privKeys;

const success = require('../consolelog.js');
success;
