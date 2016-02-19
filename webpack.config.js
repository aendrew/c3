var path = require('path');

module.exports = {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, './'),
      filename: 'c3.js',
      libraryTarget: 'umd',
      umdNamedDefine: 'c3'
    },

    // This makes it easier to debug scripts by listing line number of whichever file
    // threw the exception or console.log or whathaveyounot.
    devtool: 'inline-source-map',
};
