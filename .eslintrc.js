module.exports = {
  "extends": "./index.js",
  "rules": {
    // disable requiring trailing commas because it might be nice to revert to
    // being JSON at some point, and I don't want to make big changes now.
    "comma-dangle": 0,
    // we support node 4
    "prefer-destructuring": 0,
  },
}

