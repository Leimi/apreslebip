'use strict';

const path = require('path');
const config = require('./webpack.config');
const fullPath = path.resolve.bind(null, __dirname);

module.exports = config;
