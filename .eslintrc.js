module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "max-len": [1, 120, 2, { ignoreComments: true }],
        "quote-props": [1, "consistent-as-needed"],
        "no-cond-assign": [2, "except-parens"],
        "radix": 0,
        "no-param-reassign": 0,
        "react/jsx-filename-extension": 0,
        "global-require": 0,
        "one-var": 0,
        "jsx-a11y/anchor-is-valid": 0
    },
    
};