const input = require('./bin/index.js');

const numTxIn = (tIn) => {
    let numTx = 0;
    if (typeof tIn === 'string') {
        return numTx = 1;
    } else {
        return numTx = tIn.length;
    }
};
const numOfTxs = numTxIn(input.txIn);

module.exports = numOfTxs;
