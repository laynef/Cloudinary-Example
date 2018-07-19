const fs = require('fs')
const path = require('path')

const index = fs.readdirSync(path.join(__dirname, 'methods')).reduce((acc, item) => {
    acc = { ...acc, ...require(path.join(__dirname, 'methods', item)) };
    return acc;
}, {});

module.exports = index;
