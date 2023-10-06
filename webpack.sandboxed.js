const path = require('node:path');

module.exports = {
  entry: './src/sandboxed.js',
  output: {
    filename: 'sandboxed.bundle.js',
    path: path.resolve(__dirname, 'src'),
    library: {
      type: 'commonjs-static'
    }
  },
};
