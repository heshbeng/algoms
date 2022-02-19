const { exec } = require('child_process');
const input = require('./bin/index.js');

const signTx = (tIn, keys) => {
    let sTxArr = [];
    const pathFileSign = (pathToFile, keyIndex) => {
        let last = pathToFile.lastIndexOf('/');
        let filename = pathToFile.slice(last + 1);
        let path = pathToFile.slice(0, last);
        let sFilename = `key${keyIndex}-s-${filename}`;
        let sTx = path.concat('/', sFilename);
        return sTx
    };
    const pathlessFileSign = (pathToFile, keyIndex) => {
        return `key${keyIndex}-s-${pathToFile}`;
    };
    for (let k of keys) {
        let keyIndex = keys.indexOf(k) + 1;
        let txOut = tIn.includes('/') ? pathFileSign(tIn, keyIndex) : pathlessFileSign(tIn, keyIndex);
        exec(`../algokey multisig -t ${tIn} -o ${txOut} -m "${k}"`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`error: ${stderr}`);
                return;
            }
            return stdout;
        });
        sTxArr.push(txOut);
    };
    return sTxArr;
};

const multiTx = (tIn, keys) => {
    let txOutArr = [];
    let sTxArr = [];
    if (typeof tIn !== 'string') {
        for (let t of tIn) {
            sTxArr = signTx(t, keys);
            txOutArr.push(sTxArr);
        };
    } else {
        sTxArr = signTx(tIn, keys);
        txOutArr.push(sTxArr);
    }
    return txOutArr
};

let txOutArr = multiTx(input.txIn, input.privKeys);

module.exports = txOutArr;
