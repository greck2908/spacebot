module.exports = {
  "extends": "airbnb",
  "env": {
    "mocha": true,
    "node": true,
    "es6": true
  },
  "rules": {
    //AWS Lambda specific
    "no-console": [0],

    //Couple of my overrides
    "comma-dangle": [2, "never"],
    "max-len": [2, 120, 4, {"ignoreComments": true, "ignoreUrls": true}],
    "no-param-reassign": [2, { "props": false }]
  }
}
