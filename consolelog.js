const txOutArr = require('./multisign.js');
const numOfTxs = require('./numTxIn.js');

const confirm = (txOutArr, numOfTxs) => {
    let pluralS = numOfTxs > 1 ? 's' : '';
    let pluralP = numOfTxs > 1 ? '(one for each separate transaction) ' : '';
    console.log(`
------
AlgoMS
------
Transactions signed: ${numOfTxs}
Signed files created:
    `);

    txOutArr.forEach(sTxArr => sTxArr.forEach(sTx => console.log(sTx)));
    
    console.log(`

To finalize your transaction${pluralS}: 

1. Export files to an online node

2. Merge the signed files into a single signed file ${pluralP}using 'goal clerk multisig merge'

3. Submit the signed multisig transaction${pluralS} to the blockchain using 'goal clerk rawsend'

------
*Check for error messages below. If no errors appear, the program was a success.*
------
    
    `);
};
const success = confirm(txOutArr, numOfTxs);

module.exports = success; 
