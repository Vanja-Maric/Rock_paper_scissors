// Compare with: hhttps://github.com/prettier/prettier/blob/main/commands.md#softline

const oneLineArray = [1, 
  "foo"
, { 
  bar: 2 
}];

const oneLineArrayWithVeryVeryVeryLongLongName = [1, 
  "foo"
, { 
  bar: 2 
}];


const multiLineArrayWithHardBreak = [ 1,function () {return 2;},3,];



// Compare with: https://archive.jlongster.com/A-Prettier-Formatter

// Function with arguments that should be formatted on one line
function foo(arg1, 
  arg2, 
  arg3) {
  return arg1 + arg2 + arg3;
}

// Function with arguments that should be formatted on multiple lines
function foo(reallyLongArg, omgSoManyParameters, IShouldRefactorThis, isThereSeriouslyAnotherOne) {
  // body
}

// Each . should be on a new line
myPromise.then(() => {
    // ...
  }).then(() => {
    // ...
  }).catch(() => {
    // ..
  });