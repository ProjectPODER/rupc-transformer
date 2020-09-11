#!/usr/bin/env node
const JSONStream = require('JSONStream');
const es = require('event-stream');
const commandLineArgs = require('command-line-args');
const classify = require('./lib/classify');

const optionDefinitions = [
  { name: 'function', alias: 'f', type: String, defaultValue: 'transform' }
];
const args = commandLineArgs(optionDefinitions);

process.stdin.setEncoding('utf8');

switch(args.function) {
    case 'transform':
        process.stdin
          .pipe(JSONStream.parse())
          .pipe(es.mapSync(function (document) {
            // JSON transformations go here...
            return document;
          }))
          .pipe(JSONStream.stringify(false))
          .pipe(process.stdout);
        break;
    case 'classify':
        process.stdin
          .pipe(JSONStream.parse())
          .pipe(es.mapSync(function (document) {
            return classify(document);
          }))
          .pipe(process.stdout);
        break;
    default:
        console.log("ERROR: invalid function specified. Possible values:");
        console.log("-- transform (outputs releases)");
        console.log("-- classify (outputs classifier list)");
        process.exit(1);
}

process.stdin.on('end', () => {
  process.stdout.write('\n');
});
