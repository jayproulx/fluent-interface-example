#!/usr/bin/env node

const UnitConvert = require("./lib/UnitConvert.js");
const yargs = require('yargs')
        .usage('A fluent interface, with unit conversions as the example.\nUsage: $0')
        .alias('H', 'help')
        .describe('help', 'Print usage and quit.')
        .alias('c', 'convert')
        .describe('convert', 'A value to convert, e.g. 100')
        .alias('f', 'from')
        .describe('from', 'The unit of the value to convert, e.g. C')
        .alias('t', 'to')
        .describe('to', 'The unit to convert to, e.g. F')
        .alias('p', 'possibilities')
        .boolean('possibilities')
        .describe('possibilities', 'Print possible units to convert from / to, optionally pass the from argument to show conversions for that unit'),
    argv = yargs.argv;

if (argv.possibilities) {
    // this could use some improving, but works in a pinch
    console.log(UnitConvert.possibilities(argv.from).join("\t\t\t"));

    process.exit(0);
}

if (argv.H || argv.to === undefined || argv.convert === undefined || argv.from === undefined) {
    yargs.showHelp();

    process.exit(0);
}

console.log(new UnitConvert().from(argv.convert, argv.from).to(argv.to).execute());