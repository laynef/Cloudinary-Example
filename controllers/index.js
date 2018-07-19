const fs = require('fs')
const path = require('path')

const index = fs.readdirSync(path.join(__dirname)).reduce((acc, item) => {
    if (fs.lstatSync(path.join(__dirname, item)).isDirectory()) {
        acc[item] = require(`./${item}`);
    }
    return acc;
}, {});

module.exports = index;