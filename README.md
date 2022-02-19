------
AlgoMS
------

AlgoMS is a command line application that makes 
signing Algorand transactions with an offline multisig wallet 
just a little bit easier, and a little bit faster.

Instead of entering a separate algokey command
for every key and every transaction file,
use AlgoMS to sign one or more Algorand transactions
with multiple private keys all at once.

You should have Node.js, npm, and algokey installed
on your offline computer / wallet prior to using AlgoMS. 
From the main algoms directory, enter the command
'npm install -g' to enable the global command 'algoms'.

Run 'algoms' with options '-t' and '-k' for each transaction
you want to sign and each seed phrase (private key) you want to
sign the transaction(s) with, repectively.
You can sign as many transactions as you want
with as many keys as you want to sign them with,
but you must input at least one transaction and one key
for the program to execute successfully.

You can also run AlgoMS by entering 'node .', followed by
your options, in the main algoms directory.

Ensure that no error messages appear below the standard
program output in the terminal. If no errors are present,
your transaction files have been signed.

AlgoMS names your signed output files for you and creates them
in the same directory where the unsigned input files reside.
Prior to submitting your transaction to the blockchain,
you must export the signed tx files to an online computer
with access to an Algorand node. From there, follow these steps:

1. Merge the signed files into a single signed file 
(one master signed multisig file per transaction)
using 'goal clerk multisig merge'.

2. Submit the merged multisig transaction(s) 
to the blockchain using 'goal clerk rawsend'.

ALGO-YEAH!
------

