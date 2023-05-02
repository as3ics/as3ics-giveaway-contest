# as3ics-giveaway-contest results

```
as3ics@zach-as3ics-imac [03:39:22] [~/Workspace/as3ics-giveaway-contest] 
-> % npm run go

> as3ics-giveaway-contest@1.0.0 go /Users/as3ics/Workspace/as3ics-giveaway-contest
> rm -r ./dist && tsc && node --experimental-json-modules ./dist/index.js

(node:59259) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

Welcome to the AS3ICS Giveaway Determination

all data and processes will be explained and logged throughout this script.

importing contestants...
import successful

printing contestants

[
  { name: 'Kirk M.', entries: 8, enum: 0 },
  { name: 'Stephen D.', entries: 4, enum: 1 },
  { name: 'Brandon K.', entries: 4, enum: 2 },
  { name: 'Susheel N.', entries: 4, enum: 3 },
  { name: 'Sean M.', entries: 4, enum: 4 },
  { name: 'Paul K.', entries: 4, enum: 5 },
  { name: 'Torin M.', entries: 4, enum: 6 },
  { name: 'David G.', entries: 4, enum: 7 },
  { name: 'Derek W.', entries: 4, enum: 8 },
  { name: 'Timothy R.', entries: 4, enum: 9 },
  { name: 'Dahnyl D.', entries: 2, enum: 10 },
  { name: 'Nijaf T.', entries: 2, enum: 11 },
  { name: 'Jesse Z.', entries: 2, enum: 12 },
  { name: 'Jacob C.', entries: 2, enum: 13 },
  { name: 'Brittany R.', entries: 2, enum: 14 },
  { name: 'Cory G.', entries: 2, enum: 15 },
  { name: 'Lalitha N.', entries: 2, enum: 16 },
  { name: 'Gabriel T.', entries: 2, enum: 17 },
  { name: 'David M.', entries: 2, enum: 18 },
  { name: 'Barnabas G.', entries: 2, enum: 19 },
  { name: 'James W.', entries: 2, enum: 20 },
  { name: 'Leah M.', entries: 2, enum: 21 },
  { name: 'Will B.', entries: 2, enum: 22 },
  { name: 'Madie W.', entries: 2, enum: 23 },
  { name: 'Connor E.', entries: 2, enum: 24 },
  { name: 'Brad J.', entries: 2, enum: 25 },
  { name: 'Jason R.', entries: 2, enum: 26 },
  { name: 'Jonathan Z.', entries: 2, enum: 27 },
  { name: 'Mikey T.', entries: 2, enum: 28 },
  { name: 'Marta V.', entries: 2, enum: 29 },
  { name: 'Music Production Studio', entries: 3, enum: 30 }
]

creating entry bucket...
bucket successfully created

print bucket initial state
[]

filling bucket with entries...
bucket filled.

print bucket state
[
   0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,
   2,  2,  2,  2,  3,  3,  3,  3,  4,  4,  4,  4,
   5,  5,  5,  5,  6,  6,  6,  6,  7,  7,  7,  7,
   8,  8,  8,  8,  9,  9,  9,  9, 10, 10, 11, 11,
  12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17,
  18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
  24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
  30, 30, 30
]

number contestants: 31
number entries: 87
average entries per contestant: 2.806451612903226
average odds of winning: 3.2258064516129035

contestant individual winning odds...

contestant: Kirk M. odds: 9.195402298850574
contestant: Stephen D. odds: 4.597701149425287
contestant: Brandon K. odds: 4.597701149425287
contestant: Susheel N. odds: 4.597701149425287
contestant: Sean M. odds: 4.597701149425287
contestant: Paul K. odds: 4.597701149425287
contestant: Torin M. odds: 4.597701149425287
contestant: David G. odds: 4.597701149425287
contestant: Derek W. odds: 4.597701149425287
contestant: Timothy R. odds: 4.597701149425287
contestant: Dahnyl D. odds: 2.2988505747126435
contestant: Nijaf T. odds: 2.2988505747126435
contestant: Jesse Z. odds: 2.2988505747126435
contestant: Jacob C. odds: 2.2988505747126435
contestant: Brittany R. odds: 2.2988505747126435
contestant: Cory G. odds: 2.2988505747126435
contestant: Lalitha N. odds: 2.2988505747126435
contestant: Gabriel T. odds: 2.2988505747126435
contestant: David M. odds: 2.2988505747126435
contestant: Barnabas G. odds: 2.2988505747126435
contestant: James W. odds: 2.2988505747126435
contestant: Leah M. odds: 2.2988505747126435
contestant: Will B. odds: 2.2988505747126435
contestant: Madie W. odds: 2.2988505747126435
contestant: Connor E. odds: 2.2988505747126435
contestant: Brad J. odds: 2.2988505747126435
contestant: Jason R. odds: 2.2988505747126435
contestant: Jonathan Z. odds: 2.2988505747126435
contestant: Mikey T. odds: 2.2988505747126435
contestant: Marta V. odds: 2.2988505747126435
contestant: Music Production Studio odds: 3.4482758620689653

total odds calculated: 99.99999999999994

odds parity check success!

Introducing entropy to bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...
shuffling bucket...

print new bucket:

[
  13, 15,  3,  1,  0,  9,  0, 14, 15, 27,  5, 19,
  26,  3,  2, 25,  1, 10,  0, 28, 22, 18, 30,  0,
   6, 14,  1, 28, 24,  8, 16, 23,  4,  8,  9, 27,
   3, 13,  2, 23, 10, 17,  7,  8, 21,  2, 16,  0,
  20, 25, 24,  9,  0,  1,  6, 29,  4, 12, 17,  7,
   2,  3, 12, 11, 26,  5,  6,  6, 21, 11,  4,  5,
   4,  9,  5,  7, 30,  0, 19, 20,  0, 29,  8, 22,
  30,  7, 18
]

proceeding to determine contest winner. May the odds be ever in your favor, and best of luck to all of the contestants.

pulling random index...

winning index: 47
winning enum: 0

And we have a winner! Contestant 0

lets find the identity of the winner...

Congratulations to the winner of this contest. The odds were with you this day.

{ name: 'Kirk M.', entries: 8, enum: 0 }
```
