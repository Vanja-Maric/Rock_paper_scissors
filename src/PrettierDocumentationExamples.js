// Compare with: hhttps://github.com/prettier/prettier/blob/main/commands.md#softline

const oneLineArray = [
  1,
  "foo",
  {
    bar: 2,
  },
];

const oneLineArrayWithVeryVeryVeryLongLongName = [
  1,
  "foo",
  {
    bar: 2,
  },
];

const multiLineArrayWithHardBreak = [
  1,
  function () {
    return 2;
  },
  3,
];

// Compare with: https://archive.jlongster.com/A-Prettier-Formatter

// Function with arguments that should be formatted on one line
function foo(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

// Function with arguments that should be formatted on multiple lines
function foo(
  reallyLongArg,
  omgSoManyParameters,
  IShouldRefactorThis,
  isThereSeriouslyAnotherOne,
) {
  // body
}

// Each . should be on a new line
myPromise
  .then(() => {
    // ...
  })
  .then(() => {
    // ...
  })
  .catch(() => {
    // ..
  });

// Quotes should be single quotes
// If the number of quotes outweighs the other quote,
// the quote which is less used will be used to format the string
// - Example: "I'm double quoted" results in "I'm double quoted" and
// "This \"example\" is single quoted" results in 'This "example" is single quoted'.

let singleQuotesExample =
  'This "example" is single quotedc but not yet formatted';
let doubleQuotesExample = "I'm double quoted, but not yet formatted";

// Quote props
const obj ={"key": "value",
  numeric: 42,
  'key-with-dashes': true,
  "key with spaces": null,
};

// BRACKET SPACING

const object = { foo: 'bar', baz: 'qux' 
};

