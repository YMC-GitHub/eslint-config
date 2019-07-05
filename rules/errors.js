module.exports = {
  rules: {
    // uses `error`. it stops if there is an infinite `for` loop that is a bug.
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // using ES5 property getters? look here if yes:
    // uses `error`. it stops if a return statement is not present in property getters.
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // using async function syntax?look here if yes:
    // uses `error`. it stops if there is using an async function as a Promise executor.
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    //  uses `error`. it stops if there is using await statement inside of loops.
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // uses `error`. it stops if there is tring to compare against negative zero.
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // uses `error`. it stops if there is assignment in conditional expressions.
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // uses `warn`. it warns if there is using console assignment in production code.
    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // uses `warn`. it warns if there is using constant expressions in conditions.
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // uses `error`. it stops if there is using control characters in regular expressions.
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // uses `error`. it stops if there is using debugger statement.
    // it has fallen out of favor as a good practice with the advent
    // of modern debugging and development tools.
    // production code should definitely not contain debugger.
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // uses `error`. it stops if there is using duplicate arguments in functions.
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // uses `error`. it stops if there is using duplicate keys when creating object literals.
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // uses `error`. it stops if there is using a duplicate case label.
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // uses `error`. it stops if there is using empty block statements.
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // uses `error`. it stops if there is using empty character classes in regular expressions.
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // uses `error`. it stops if there is assigning to the exception in a catch block.
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // uses `error`. it stops if there is using unnecessary boolean casts in a boolean context.
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // uses `off`. it does nothing if there is using unnecessary parentheses for all.
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // uses `error`. it stops if there is using unnecessary semicolons.
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // uses `error`. it stops if there is overwriting functions written as function declarations.
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // uses `error`. it stops if there is a function  declarations in nested blocks.
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // uses `error`. it stops if there is an invalid regular expression strings
    // in the RegExp constructor.
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // uses `error`. it stops if there is an irregular whitespace outside of strings and comments.
    'no-irregular-whitespace': 'error',

    // uses `error`. it stops if there is a characters
    // which are made with multiple code points in character class syntax.
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    //  uses `error`. it stops if there is calling global object properties as functions.
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // uses `error`. it stops if there is using  Object.prototypes builtins directly.
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // uses `error`. it stops if there is using multiple spaces in a regular expression literal.
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // uses `error`. it stops if there is using sparse arrays.
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // uses `error`. it stops if there is using template literal placeholder syntax
    // in regular strings.
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // uses `error`. it stops if there is using code
    // that looks like two expressions but is actually one.
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',


    // uses `error`. it stops if there is using unreachable statements
    // after a return, throw, continue, or break statement.
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // uses `error`. it stops if there is using return/throw/break/continue inside finally blocks.
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',


    // uses `error`. it stops if there is using negating the left operand of relational operators.
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // uses `off`. it does nothing if there is using
    // negation of the left operand of an in expression.
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // using async or generator functions? look below if yes:
    // uses `error`. it stops if there is using assignments
    // that can lead to race conditions due to usage of await or yield.
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // uses `error`. it stops if there is using comparisons with the value NaN.
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',


    // uses `off`. it does nothing if there is JSDoc comments are not valid.
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // uses `error`. it stops if there is
    // the results of typeof are not compared against a valid string.
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
